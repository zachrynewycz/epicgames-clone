import Image from "next/image";
import { useState } from "react";

function Screenshots({ images, backgroundImage }) {
    const [selectedImage, setSelectedImage] = useState(backgroundImage);

    return (
        <div>
            <Image className="rounded-md" src={selectedImage} alt="" width={1000} height={0} />

            <div className="flex gap-5 mt-10 justify-center">
                {images
                    ?.filter((image) => image.image.src)
                    ?.map((image) => (
                        <Image
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
