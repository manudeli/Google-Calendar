import Image from 'next/image';

interface Props {
  imageSrc: string;
}

export const ProfileImage = ({ imageSrc }: Props) => {
  return (
    <div>
      <img src={imageSrc} />
    </div>
  );
};
