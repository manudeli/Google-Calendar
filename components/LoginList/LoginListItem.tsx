import Image from 'next/image';
import { ProfileImage } from '../UI/ProfileImage';

function LoginListItem({ item, onClick }) {
  return (
    <li onClick={onClick}>
      <div>
        <ProfileImage imageSrc={item.imageUrl} />
        <div>
          <h6>{item.username}</h6>
          <p>{item.email}</p>
        </div>
      </div>
    </li>
  );
}

export default LoginListItem;
