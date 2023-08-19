import Image from "next/image";
import { CSSProperties } from "react";

export default function FadeImage() {
  return (
    <div
      className="relative m-10 scale-100 bg-cover bg-center"
      data-color="blue"
    >
      <div className="relative z-20 h-60 w-60 overflow-hidden rounded-xl">
        <Image
          src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
          fill
          className="object-cover"
          alt=""
        />
      </div>

      <div className="absolute left-0 top-0 z-10 h-full w-full">
        {/* EIGHT */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 4 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* SEVEN */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 4 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* SIX */}
        <div
          className="absolute [animation-delay:calc(1500ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 4 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* FIVE */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 4 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* FOUR */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 4 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* THREE */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 3 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* TWO */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 3 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
        {/* ONE */}
        <div
          className="absolute [animation-delay:calc(var(--animation-order)*200ms)] odd:animate-fade-right even:animate-fade-left"
          style={{ "--animation-order": 3 } as CSSProperties}
        >
          <div className="relative h-60 w-60 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              src="https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80"
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
