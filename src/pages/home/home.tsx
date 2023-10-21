import { useEffect, useRef } from "react";

export default function Body() {
  const scrlRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    console.log(scrlRef);
    scrlRef.current.addEventListener("scroll", (event: Event) => {
      let scrollTop = (event.target as HTMLDivElement).scrollTop;
      let scrollHeight = (event.target as HTMLDivElement).scrollHeight;
      let clientHeight = (event.target as HTMLDivElement).clientHeight;
      console.log(scrollTop, scrollHeight, clientHeight);
      let percentageScroll = (scrollTop + clientHeight) / scrollHeight;
      console.log(percentageScroll);
    });
  });
  return (
    <div className="body" id="body" ref={scrlRef}>
      <div className="scroll">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolorum
        iure non atque officia! Nisi asperiores, dolores voluptatibus officia
        magnam quis vero voluptate autem ipsum repudiandae velit. Deleniti, quo
        ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
        dolorum iure non atque officia! Nisi asperiores, dolores voluptatibus
        officia magnam quis vero voluptate autem ipsum repudiandae velit.
        Deleniti, quo ea. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quam dolorum iure non atque officia! Nisi asperiores, dolores
        voluptatibus officia magnam quis vero voluptate autem ipsum repudiandae
        velit. Deleniti, quo ea. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Quam dolorum iure non atque officia! Nisi asperiores,
        dolores voluptatibus officia magnam quis vero voluptate autem ipsum
        repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quam dolorum iure non atque officia! Nisi
        asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quam dolorum iure non atque officia!
        Nisi asperiores, dolores voluptatibus officia magnam quis vero voluptate
        autem ipsum repudiandae velit. Deleniti, quo ea.
      </div>
    </div>
  );
}
