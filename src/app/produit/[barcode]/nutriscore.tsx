import styles from "./page.module.css";
import Image from "next/image";

export default function Nutriscore() {
  return (
    <div>
      <Image
        src="/nutri_d.svg"
        alt="nutriscore"
        className="nutriscore"
        width={100}
        height={100}
      />

      <Image
        src="/nova.svg"
        alt="score nova"
        className="nova"
        width={100}
        height={100}
      />
    </div>
  );
}
// data product
