import Image from 'next/image';

type ContactInfoProps = {
  avatar: string;
  name: string;
  phone?: string;
};

const ContactInfo = ({ avatar, name, phone }: ContactInfoProps) => {
  return (
    <div id="contact-info" className="flex gap-4">
      <Image
        className="h-10 w-10 object-cover rounded-full"
        src={`/images/${avatar}`}
        alt="prof"
        width={40}
        height={40}
      />
      <div id="contact-details" className="h-10">
        <h3>{name}</h3>
        <p className="contact-message text-secondary">{phone}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
