import { IconSvgProps } from "@/types";

export const EpisodesFiledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13.8095 15.7143V10C13.8095 9.49483 13.6089 9.01035 13.2516 8.65314C12.8944 8.29593 12.41 8.09525 11.9048 8.09525H3.33335C2.82818 8.09525 2.34369 8.29593 1.98648 8.65314C1.62927 9.01035 1.42859 9.49483 1.42859 10V15.7143C1.42859 16.2195 1.62927 16.704 1.98648 17.0612C2.34369 17.4184 2.82818 17.6191 3.33335 17.6191H11.9048C12.41 17.6191 12.8944 17.4184 13.2516 17.0612C13.6089 16.704 13.8095 16.2195 13.8095 15.7143Z" stroke="url(#paint0_linear_1678_1571)" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.7143 15.7143V9.05239C15.7143 8.29463 15.4133 7.56791 14.8774 7.03209C14.3416 6.49627 13.6149 6.19525 12.8571 6.19525H12.8524L4.28571 6.21049" stroke="url(#paint1_linear_1678_1571)" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.6191 13.8095V8.10191C17.6191 7.09156 17.2177 6.1226 16.5033 5.40817C15.7889 4.69375 14.8199 4.29239 13.8095 4.29239H13.8029L6.19049 4.30477" stroke="url(#paint2_linear_1678_1571)" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_1678_1571" x1="1.59096" y1="12.0462" x2="13.5773" y2="12.6763" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5956" />
        <stop offset="1" stopColor="#EE1E38" />
      </linearGradient>
      <linearGradient id="paint1_linear_1678_1571" x1="4.43559" y1="10.1443" x2="15.5044" y2="10.6816" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5956" />
        <stop offset="1" stopColor="#EE1E38" />
      </linearGradient>
      <linearGradient id="paint2_linear_1678_1571" x1="6.34037" y1="8.24062" x2="17.4092" y2="8.77805" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5956" />
        <stop offset="1" stopColor="#EE1E38" />
      </linearGradient>
    </defs>
  </svg>
);