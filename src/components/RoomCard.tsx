import Button from "./Button";
import Photo from "./Photo";
import { Room, rs, whatsappLink } from "@/data/site";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sand bg-white">
      <Photo caption={room.imageCaption} src={room.image} rounded="rounded-none" className="h-[210px] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[20px] font-semibold">{room.name}</h3>
        <p className="mt-1 text-[13px] text-muted">{room.sleeps} · {room.details}</p>
        <p className="mt-4 text-[13px] text-muted">
          From <span className="font-display text-[20px] font-semibold text-maroon">{rs(room.price)}</span> / night
        </p>
        <div className="mt-5">
          <Button
            href={whatsappLink(`Hello, I would like to check availability for the ${room.name}. Dates: `)}
            variant="secondary"
            full
          >
            Ask availability
          </Button>
        </div>
      </div>
    </article>
  );
}
