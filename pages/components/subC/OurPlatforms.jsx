import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Platforms = (props) => {
  const images = [
    {
      src: props.link1,
    },
    {
      src: props.link2,
    },
    {
      src: props.link3,
    },
    {
      src: props.link4,
    },
    {
      src: props.link5,
    },
  ];

  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white w-full flex flex-col justify-center items-center h-full">
      <svg width="1124" height="143" viewBox="0 0 1124 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.08">
<rect y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect y="12.5" width="172" height="1" rx="0.5" fill="url(#paint0_linear_228_46)"/>
</g>
<rect x="177" y="11" width="4" height="4" rx="2" fill="#0E3F7E" fill-opacity="0.08"/>
<rect x="186" y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect x="363" y="11" width="4" height="4" rx="2" fill="#0E3F7E" fill-opacity="0.08"/>
<rect x="372" y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect x="549.5" y="0.5" width="25" height="25" rx="12.5" stroke="#0E3F7E" stroke-opacity="0.06"/>
<rect x="580" y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect x="757" y="11" width="4" height="4" rx="2" fill="#0E3F7E" fill-opacity="0.08"/>
<rect x="766" y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect x="943" y="11" width="4" height="4" rx="2" fill="#0E3F7E" fill-opacity="0.08"/>
<g opacity="0.08">
<rect x="952" y="12.5" width="172" height="1" rx="0.5" fill="#0E3F7E" fill-opacity="0.06"/>
<rect x="952" y="12.5" width="172" height="1" rx="0.5" fill="url(#paint1_linear_228_46)"/>
</g>
<rect x="178" y="23" width="1" height="120" fill="#0E3F7E" fill-opacity="0.06"/>
<path d="M448.343 83.432C448.343 86.984 447.623 90.136 446.183 92.888C444.743 95.608 442.743 97.736 440.183 99.272C437.623 100.808 434.663 101.576 431.303 101.576C427.975 101.576 425.031 100.808 422.471 99.272C419.911 97.736 417.911 95.608 416.471 92.888C415.063 90.168 414.359 87.032 414.359 83.48C414.359 79.896 415.079 76.744 416.519 74.024C417.959 71.272 419.943 69.128 422.471 67.592C425.031 66.056 427.991 65.288 431.351 65.288C434.711 65.288 437.655 66.056 440.183 67.592C442.743 69.128 444.743 71.256 446.183 73.976C447.623 76.696 448.343 79.848 448.343 83.432ZM441.911 83.432C441.911 80.936 441.479 78.776 440.615 76.952C439.751 75.128 438.535 73.72 436.967 72.728C435.399 71.704 433.527 71.192 431.351 71.192C429.207 71.192 427.335 71.704 425.735 72.728C424.167 73.72 422.951 75.128 422.087 76.952C421.223 78.776 420.791 80.936 420.791 83.432C420.791 85.928 421.223 88.104 422.087 89.96C422.951 91.784 424.167 93.192 425.735 94.184C427.335 95.176 429.207 95.672 431.351 95.672C433.527 95.672 435.399 95.176 436.967 94.184C438.535 93.16 439.751 91.736 440.615 89.912C441.479 88.056 441.911 85.896 441.911 83.432ZM468.365 77.288H474.221V101H468.797L468.365 97.832C467.661 98.952 466.605 99.864 465.197 100.568C463.789 101.272 462.285 101.624 460.685 101.624C457.965 101.624 455.837 100.76 454.301 99.032C452.765 97.304 451.997 95 451.997 92.12V77.288H457.853V90.056C457.853 92.296 458.285 93.912 459.149 94.904C460.013 95.896 461.261 96.392 462.893 96.392C464.749 96.392 466.125 95.848 467.021 94.76C467.917 93.64 468.365 91.96 468.365 89.72V77.288ZM494.189 77.192V82.616H492.029C489.885 82.616 488.205 83.192 486.989 84.344C485.773 85.464 485.165 87.176 485.165 89.48V101H479.309V77.336H484.829L485.309 82.232H484.733C485.053 80.664 485.805 79.384 486.989 78.392C488.173 77.4 489.709 76.904 491.597 76.904C492.013 76.904 492.429 76.92 492.845 76.952C493.261 76.984 493.709 77.064 494.189 77.192ZM516.179 65.912V101H510.035V65.912H516.179ZM523.907 88.904H514.691V83.432H522.611C524.723 83.432 526.323 82.904 527.411 81.848C528.531 80.76 529.091 79.256 529.091 77.336C529.091 75.416 528.531 73.944 527.411 72.92C526.323 71.896 524.755 71.384 522.707 71.384H514.115V65.912H523.907C526.275 65.912 528.323 66.392 530.051 67.352C531.779 68.312 533.123 69.656 534.083 71.384C535.043 73.08 535.523 75.08 535.523 77.384C535.523 79.624 535.043 81.624 534.083 83.384C533.123 85.112 531.779 86.472 530.051 87.464C528.323 88.424 526.275 88.904 523.907 88.904ZM544.771 101H538.963V65.288H544.771V101ZM557.01 101.624C554.514 101.624 552.53 100.952 551.058 99.608C549.618 98.232 548.898 96.44 548.898 94.232C548.898 92.056 549.65 90.328 551.154 89.048C552.69 87.736 554.866 86.968 557.682 86.744L564.786 86.168V85.64C564.786 84.552 564.578 83.688 564.162 83.048C563.778 82.376 563.218 81.896 562.482 81.608C561.746 81.288 560.882 81.128 559.89 81.128C558.162 81.128 556.834 81.48 555.906 82.184C554.978 82.856 554.514 83.816 554.514 85.064H549.522C549.522 83.336 549.954 81.848 550.818 80.6C551.714 79.32 552.962 78.328 554.562 77.624C556.194 76.92 558.066 76.568 560.178 76.568C562.322 76.568 564.162 76.952 565.698 77.72C567.234 78.456 568.418 79.576 569.25 81.08C570.082 82.552 570.498 84.392 570.498 86.6V101H565.362L564.93 97.496C564.418 98.712 563.426 99.704 561.954 100.472C560.514 101.24 558.866 101.624 557.01 101.624ZM558.882 97.208C560.706 97.208 562.146 96.696 563.202 95.672C564.29 94.648 564.834 93.224 564.834 91.4V90.152L559.89 90.536C558.066 90.696 556.77 91.08 556.002 91.688C555.234 92.264 554.85 93.032 554.85 93.992C554.85 95.048 555.202 95.848 555.906 96.392C556.61 96.936 557.602 97.208 558.882 97.208ZM572.61 77.288H587.586V82.184H572.61V77.288ZM583.026 101H577.17V69.896H583.026V101ZM588.619 77.288H603.499V82.184H588.619V77.288ZM603.547 65.528V70.52C603.227 70.52 602.891 70.52 602.539 70.52C602.219 70.52 601.883 70.52 601.531 70.52C600.059 70.52 599.067 70.872 598.555 71.576C598.075 72.28 597.835 73.224 597.835 74.408V101H592.027V74.408C592.027 72.232 592.379 70.488 593.083 69.176C593.787 67.832 594.779 66.856 596.059 66.248C597.339 65.608 598.827 65.288 600.523 65.288C601.003 65.288 601.499 65.304 602.011 65.336C602.555 65.368 603.067 65.432 603.547 65.528ZM604.182 89.096C604.182 86.632 604.726 84.472 605.814 82.616C606.902 80.728 608.406 79.256 610.326 78.2C612.246 77.144 614.422 76.616 616.854 76.616C619.318 76.616 621.494 77.144 623.382 78.2C625.302 79.256 626.806 80.728 627.894 82.616C628.982 84.472 629.526 86.632 629.526 89.096C629.526 91.56 628.982 93.736 627.894 95.624C626.806 97.48 625.302 98.936 623.382 99.992C621.494 101.048 619.318 101.576 616.854 101.576C614.422 101.576 612.246 101.048 610.326 99.992C608.406 98.936 606.902 97.48 605.814 95.624C604.726 93.736 604.182 91.56 604.182 89.096ZM610.038 89.096C610.038 90.536 610.326 91.8 610.902 92.888C611.51 93.976 612.31 94.824 613.302 95.432C614.326 96.04 615.51 96.344 616.854 96.344C618.198 96.344 619.382 96.04 620.406 95.432C621.43 94.824 622.23 93.976 622.806 92.888C623.382 91.8 623.67 90.536 623.67 89.096C623.67 87.624 623.382 86.36 622.806 85.304C622.23 84.216 621.43 83.368 620.406 82.76C619.382 82.152 618.198 81.848 616.854 81.848C615.51 81.848 614.326 82.152 613.302 82.76C612.31 83.368 611.51 84.216 610.902 85.304C610.326 86.36 610.038 87.624 610.038 89.096ZM648.087 77.192V82.616H645.927C643.783 82.616 642.103 83.192 640.887 84.344C639.671 85.464 639.063 87.176 639.063 89.48V101H633.207V77.336H638.727L639.207 82.232H638.631C638.951 80.664 639.703 79.384 640.887 78.392C642.071 77.4 643.607 76.904 645.495 76.904C645.911 76.904 646.327 76.92 646.743 76.952C647.159 76.984 647.607 77.064 648.087 77.192ZM656.947 101H651.091V77.288H656.467L657.187 81.512L656.515 80.936C656.995 79.784 657.875 78.776 659.155 77.912C660.435 77.016 662.035 76.568 663.955 76.568C666.035 76.568 667.731 77.112 669.043 78.2C670.387 79.288 671.315 80.728 671.827 82.52H670.867C671.219 80.728 672.115 79.288 673.555 78.2C675.027 77.112 676.803 76.568 678.883 76.568C681.763 76.568 683.971 77.384 685.507 79.016C687.043 80.616 687.811 82.776 687.811 85.496V101H682.003V87.032C682.003 85.336 681.571 84.056 680.707 83.192C679.875 82.296 678.755 81.848 677.347 81.848C676.451 81.848 675.619 82.056 674.851 82.472C674.115 82.888 673.523 83.512 673.075 84.344C672.627 85.176 672.403 86.248 672.403 87.56V101H666.547V86.984C666.547 85.32 666.131 84.056 665.299 83.192C664.467 82.328 663.363 81.896 661.987 81.896C661.059 81.896 660.211 82.104 659.443 82.52C658.675 82.904 658.067 83.528 657.619 84.392C657.171 85.224 656.947 86.28 656.947 87.56V101ZM690.495 93.8H696.063C696.095 94.824 696.479 95.64 697.215 96.248C697.951 96.856 698.975 97.16 700.287 97.16C701.695 97.16 702.751 96.904 703.455 96.392C704.191 95.88 704.559 95.192 704.559 94.328C704.559 93.752 704.367 93.24 703.983 92.792C703.599 92.344 702.879 92.008 701.823 91.784L697.551 90.776C695.407 90.296 693.807 89.528 692.751 88.472C691.727 87.384 691.215 85.896 691.215 84.008C691.215 82.472 691.615 81.144 692.415 80.024C693.247 78.904 694.367 78.056 695.775 77.48C697.183 76.872 698.799 76.568 700.623 76.568C702.383 76.568 703.935 76.888 705.279 77.528C706.623 78.168 707.663 79.064 708.399 80.216C709.167 81.368 709.567 82.712 709.599 84.248H704.031C704.031 83.224 703.711 82.424 703.071 81.848C702.431 81.24 701.535 80.936 700.383 80.936C699.231 80.936 698.335 81.192 697.695 81.704C697.055 82.216 696.735 82.904 696.735 83.768C696.735 85.08 697.759 85.976 699.807 86.456L704.079 87.464C706.063 87.912 707.551 88.632 708.543 89.624C709.567 90.616 710.079 92.024 710.079 93.848C710.079 95.448 709.663 96.84 708.831 98.024C707.999 99.176 706.831 100.072 705.327 100.712C703.823 101.32 702.095 101.624 700.143 101.624C697.199 101.624 694.847 100.904 693.087 99.464C691.359 98.024 690.495 96.136 690.495 93.8Z" fill="#1F2632"/>
<rect x="945" y="23" width="1" height="120" fill="#0E3F7E" fill-opacity="0.06"/>
<defs>
<linearGradient id="paint0_linear_228_46" x1="0" y1="13" x2="172" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D3E7A" stop-opacity="0"/>
<stop offset="1" stop-color="#1D3E7A"/>
</linearGradient>
<linearGradient id="paint1_linear_228_46" x1="1124" y1="13" x2="952" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D3E7A" stop-opacity="0"/>
<stop offset="1" stop-color="#1D3E7A"/>
</linearGradient>
</defs>
</svg>


      <div className="grid grid-cols-2 gap-4 mt-8">
        {images.map((image, index) => {
          if (image.src === '') return null;
          return (
            <div key={index} className={`flex justify-center items-center ${index === 4 ? 'col-start-1 row-start-3' : ''}`}>
              <Image src={image.src} width={500} height={500} alt={`Platform ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Platforms;
