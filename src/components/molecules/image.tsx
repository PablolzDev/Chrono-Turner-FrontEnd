import React from 'react';
import Image from 'next/image'// Asegúrate de importar correctamente

const ImageSect: React.FC = () => {
    return (
        <Image
            src="/utils/hero.png"
            alt="Task view"
            width={650}
            height={380}
            style={{ cursor: 'pointer', border: 'solid' }}
        />
    );
};

export default ImageSect;