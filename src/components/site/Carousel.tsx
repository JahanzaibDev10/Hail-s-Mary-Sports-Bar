import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode, type TouchEvent } from "react";

interface Props {
  children: ReactNode[];
  className?: string;
  slideClassName?: string;
}

export function Carousel({ children, className = "", slideClassName = "min-w-0 flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%]" }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; swiping: boolean } | null>(null);
  const blockClickRef = useRef(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, swiping: false };
    blockClickRef.current = false;
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.touches[0];
    if (!start || !touch || !embla) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 18 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15;

    if (!isHorizontalSwipe) return;

    start.swiping = true;
    blockClickRef.current = true;
    if (event.cancelable) event.preventDefault();

    if (Math.abs(deltaX) < 34) return;
    if (deltaX < 0) embla.scrollNext();
    else embla.scrollPrev();

    start.x = touch.clientX;
    start.y = touch.clientY;
  }, [embla]);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  const handleClickCapture = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (!blockClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    blockClickRef.current = false;
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className="overflow-hidden touch-pan-y"
        ref={emblaRef}
        data-lenis-prevent-touch
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => { touchStartRef.current = null; }}
        onClickCapture={handleClickCapture}
      >
        <div className="flex select-none gap-5" onDragStart={(event) => event.preventDefault()}>
          {children.map((c, i) => (
            <div key={i} className={slideClassName}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          onClick={() => embla?.scrollPrev()}
          disabled={!canPrev && !embla?.canScrollPrev()}
          aria-label="Previous"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone hover:border-[var(--blitz)] hover:text-[var(--blitz)] transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => embla?.scrollNext()}
          aria-label="Next"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-bone hover:border-[var(--gold)] hover:text-[var(--gold)] transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
