import React from 'react';
import styles from '@/components/button/buttonGradient/buttonGradient.module.scss';

// Định nghĩa kiểu cho props
interface ButtonGradientProps {
  title: string; // Prop title kiểu string
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({ title }) => { // Sử dụng kiểu dữ liệu cho component
  return (
    <div
    className=" box-border"
     >
      <button className={`${styles['btn-hover']} ${styles.color}`}>
        {title}  {/* Sử dụng prop title */}
      </button>
    </div>
  );
}

export default ButtonGradient;
