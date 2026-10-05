import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"article"> & { interactive?: boolean };
type DivProps = ComponentPropsWithoutRef<"div">;
type HeadingProps = ComponentPropsWithoutRef<"h3">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;

function classes(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Card({ className, interactive = true, ...props }: CardProps) {
  return (
    <article
      data-slot="card"
      className={classes(
        "rounded-[1.8rem] border border-slate-200/80 bg-white/82 text-slate-950 shadow-[0_16px_48px_rgba(8,19,33,0.055)] backdrop-blur-xl",
        interactive && "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_26px_64px_rgba(8,19,33,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div data-slot="card-header" className={classes("px-6 pt-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HeadingProps) {
  return (
    <h3
      data-slot="card-title"
      className={classes("text-2xl font-semibold leading-tight text-slate-950", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: ParagraphProps) {
  return (
    <p
      data-slot="card-description"
      className={classes("text-sm leading-7 text-slate-600", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return <div data-slot="card-content" className={classes("px-6 pb-6", className)} {...props} />;
}
