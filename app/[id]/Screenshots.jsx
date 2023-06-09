import Image from "next/image";
import { useState } from "react";

function Screenshots({ images, backgroundImage }) {
    const [selectedImage, setSelectedImage] = useState(backgroundImage);

    return (
        <div>
            <Image className="rounded-md" src={selectedImage} alt="" width={1000} height={0} />

            <div className="flex gap-5 mt-10 justify-center overflow-x-scroll styled-scrollbars mx-10">
                {images
                    ?.filter((image) => image.image.src)
                    ?.map((image, idx) => (
                        <Image
                            key={idx}
                            onClick={() => setSelectedImage(image.image.src)}
                            className="rounded-sm cursor-pointer"
                            src={image.image.src}
                            alt=""
                            width={100}
                            height={0}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Screenshots;
