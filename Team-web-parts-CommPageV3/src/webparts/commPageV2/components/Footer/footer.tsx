import * as React from 'react';
import styles from './footer.module.scss';



const Footer: React.FC = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.logo_section}>
                        <svg className={styles.logo_main} width="243" height="64" viewBox="0 0 243 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_320_116)">
                                <path d="M20.333 63.3648C14.7233 63.3648 9.55138 61.2545 5.76704 57.4242C2.048 53.6576 0 48.5985 0 43.1757V43.0318C0 37.5586 2.04503 32.4638 5.75814 28.6854C9.55138 24.8254 14.7782 22.6987 20.477 22.6987C27.1271 22.6987 31.9354 24.7215 36.067 29.2583L36.205 29.4096L29.2018 36.9397L29.0385 36.772C26.4607 34.1215 24.2228 32.587 20.4043 32.587C17.8591 32.587 15.5247 33.66 13.8329 35.61C12.1722 37.5244 11.2566 40.1097 11.2566 42.8878V43.0318C11.2566 49.1817 15.1967 53.4766 20.8361 53.4766C24.5166 53.4766 26.9816 51.8589 29.549 49.4295L29.7078 49.2797L36.4247 56.0722L36.2822 56.228C32.9 59.9352 28.6274 63.3648 20.3316 63.3648H20.333ZM20.477 23.1439C14.8999 23.1439 9.78438 25.2231 6.07572 28.9971C2.44424 32.6909 0.445217 37.6758 0.445217 43.0318V43.1757C0.445217 48.4797 2.44721 53.4291 6.08463 57.111C9.7829 60.8568 14.8435 62.9196 20.333 62.9196C28.3395 62.9196 32.5201 59.6547 35.8117 56.084L29.6989 49.9015C27.1092 52.3205 24.5893 53.9218 20.8391 53.9218C17.8933 53.9218 15.3644 52.8265 13.5272 50.7563C11.7775 48.784 10.8128 46.04 10.8128 43.0318V42.8878C10.8128 40.0013 11.7671 37.3122 13.4975 35.3177C15.2754 33.2697 17.7285 32.1418 20.4058 32.1418C24.2999 32.1418 26.6032 33.6615 29.1958 36.2942L35.601 29.4081C31.5911 25.0777 26.9178 23.1439 20.4785 23.1439H20.477Z" fill="white" />
                                <path d="M75.9852 62.4996H64.5832V40.7241C64.5832 35.7302 62.3675 33.0901 58.1735 33.0901C53.9796 33.0901 51.5487 35.8015 51.5487 40.7241V62.4996H40.1482V23.42H51.5487V28.4821C53.8163 25.6876 57.1228 22.6987 62.6435 22.6987C66.7885 22.6987 70.1973 24.0448 72.5036 26.5914C74.7816 29.1084 75.9852 32.7992 75.9852 37.2647V62.4996ZM65.0284 62.0544H75.54V37.2647C75.54 32.9105 74.3764 29.3236 72.1741 26.8897C69.9554 24.438 66.6594 23.1425 62.645 23.1425C56.9848 23.1425 53.7184 26.4089 51.5042 29.2553L51.1065 29.7673V23.8637H40.5964V62.0544H51.1065V40.7241C51.1065 35.5892 53.6843 32.6449 58.1765 32.6449C62.6687 32.6449 65.0314 35.5136 65.0314 40.7241V62.0544H65.0284Z" fill="white" />
                                <path d="M100.702 63.3648C94.9915 63.3648 89.8077 61.3717 86.1035 57.7506C82.3592 54.091 80.2964 48.9146 80.2964 43.1757V43.0318C80.2964 37.5497 82.2123 32.4564 85.6894 28.6899C89.2571 24.8269 94.205 22.6987 99.6203 22.6987C105.681 22.6987 110.668 24.9337 114.039 29.1618C117.016 32.8942 118.656 38.127 118.656 43.897C118.656 44.6657 118.601 45.4745 118.538 46.411L118.497 47.0016H91.6821C92.7818 51.5977 96.0259 54.1251 100.845 54.1251C104.381 54.1251 106.966 53.0299 110.065 50.2176L110.213 50.084L116.794 55.9074L116.66 56.0737C112.744 60.9117 107.374 63.3648 100.701 63.3648H100.702ZM99.6203 23.1439C94.3296 23.1439 89.499 25.2201 86.0174 28.9926C82.616 32.676 80.7431 37.6625 80.7431 43.0318V43.1757C80.7431 48.7944 82.7569 53.8565 86.4151 57.4331C90.0348 60.971 95.1087 62.9196 100.702 62.9196C107.158 62.9196 112.364 60.5778 116.181 55.9594L110.218 50.6836C107.092 53.4795 104.449 54.5718 100.846 54.5718C95.7024 54.5718 92.2712 51.8218 91.1864 46.828L91.127 46.5579H118.08L118.092 46.3813C118.155 45.4523 118.21 44.6509 118.21 43.897C118.21 38.2279 116.605 33.0931 113.691 29.4393C110.405 25.3211 105.54 23.1439 99.6188 23.1439H99.6203ZM108.02 40.1542H90.9949L91.041 39.893C91.97 34.5534 95.0969 31.4918 99.6218 31.4918C104.147 31.4918 107.291 34.6365 107.987 39.9019L108.02 40.1542ZM91.5262 39.709H107.51C106.779 34.8368 103.845 31.937 99.6203 31.937C95.3952 31.937 92.4686 34.7656 91.5262 39.709Z" fill="white" />
                                <path d="M157.492 62.4996H145.199L137.535 50.6494L129.871 62.4996H117.865L131.57 42.6711L118.371 23.4199H130.665L137.752 34.5459L144.909 23.4199H156.915L143.715 42.5271L157.491 62.4996H157.492ZM145.44 62.0543H156.645L143.176 42.5271L156.069 23.8651H145.154L137.752 35.3725L130.423 23.8651H119.219L132.114 42.6726L118.717 62.0558H129.632L137.538 49.8317L145.443 62.0558L145.44 62.0543Z" fill="white" />
                                <path d="M172.429 62.4996H161.027V23.4199H172.429V62.501V62.4996ZM161.473 62.0543H171.984V23.8651H161.473V62.0558V62.0543Z" fill="white" />
                                <path d="M195.487 63.2209C190.789 63.2209 186.409 61.3703 183.155 58.0089C179.571 54.3062 177.677 49.1283 177.677 43.0318V42.8878C177.677 36.7765 179.553 31.5971 183.1 27.9122C186.337 24.5508 190.735 22.6987 195.487 22.6987C200.239 22.6987 204.052 24.4143 207.303 28.0873V23.4185H218.705V62.4996H207.303V57.3945C204.227 61.3658 200.456 63.2209 195.487 63.2209ZM195.487 23.1439C190.857 23.1439 186.573 24.9471 183.422 28.2209C179.955 31.8212 178.124 36.8937 178.124 42.8878V43.0318C178.124 49.0096 179.975 54.0821 183.477 57.6987C186.645 60.9725 190.912 62.7757 195.489 62.7757C200.521 62.7757 204.288 60.8123 207.346 56.596L207.749 56.041V62.0544H218.26V23.8652H207.749V29.3013L207.355 28.8309C204.107 24.9515 200.336 23.1439 195.489 23.1439H195.487ZM198.3 53.9218C192.789 53.9218 188.634 49.2396 188.634 43.0318V42.8878C188.634 39.7713 189.651 36.9605 191.495 34.9704C193.273 33.053 195.689 31.9978 198.3 31.9978C200.91 31.9978 203.301 33.0634 205.068 34.9986C206.889 36.9932 207.893 39.7951 207.893 42.8878V43.0318C207.893 46.1245 206.889 48.9264 205.068 50.921C203.301 52.8562 200.898 53.9218 198.3 53.9218ZM198.3 32.4416C195.815 32.4416 193.515 33.4463 191.822 35.2717C190.053 37.1787 189.079 39.8841 189.079 42.8878V43.0318C189.079 46.0088 190.053 48.7038 191.823 50.6198C193.523 52.4615 195.823 53.4766 198.3 53.4766C200.777 53.4766 203.058 52.463 204.739 50.6212C206.486 48.7083 207.447 46.0132 207.447 43.0318V42.8878C207.447 39.9064 206.486 37.2113 204.739 35.2984C203.058 33.4567 200.771 32.443 198.3 32.443V32.4416Z" fill="white" />
                                <path d="M207.686 13.0196L220.804 0H235.555C239.176 0 242.112 2.93546 242.112 6.55656V21.3081L228.993 34.4271V17.0874C228.993 14.8317 227.157 13.0063 224.901 13.0196H207.685H207.686Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_320_116">
                                    <rect width="242.112" height="63.3647" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className={styles.links_section}>
                        {/* Main_url components */}
                        <div className={styles.Main_url}>
                            <div className={styles.url_title}>
                                <a href="#1">
                                    <strong>
                                        People & Culture
                                    </strong>
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#2">
                                    Q&A
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#3">
                                    Documents
                                </a>
                            </div>
                        </div>

                        <div className={styles.Main_url}>
                            <div className={styles.url_title}>
                                <a href="#1">
                                    <strong>
                                        People & Culture
                                    </strong>
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#2">
                                    Q&A
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#3">
                                    Documents
                                </a>
                            </div>
                        </div>


                        <div className={styles.Main_url}>
                            <div className={styles.url_title}>
                                <a href="#1">
                                    <strong>
                                        People & Culture
                                    </strong>
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#2">
                                    Q&A
                                </a>
                            </div>
                            <div className={styles.sub_links}>
                                <a href="#3">
                                    Documents
                                </a>
                            </div>
                        </div>

                    </div>



                    <div className={styles.social_section}>
                        <div className={styles.social}>
                            <div className='social_holder'>
                                <a href="#">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19.5" cy="19.5" r="19.5" fill="white" />
                                        <g clip-path="url(#clip0_252_3)">
                                            <path d="M23.1185 8C23.5 8.03296 23.8815 8.06397 24.265 8.09693C24.5044 8.11826 24.7438 8.13958 25 8.16284V11.9858C24.9252 11.9858 24.8466 11.9858 24.7662 11.9858C23.9825 11.9994 23.1989 11.9955 22.4152 12.0284C21.4108 12.0711 20.861 12.61 20.8198 13.651C20.7787 14.6805 20.8105 15.7118 20.8105 16.7742H24.8766C24.697 18.2204 24.5212 19.6336 24.3416 21.0682H20.8067V31.9981H16.5387V21.074H13V16.7877H16.5368C16.5368 16.6656 16.5368 16.5745 16.5368 16.4814C16.5443 15.3551 16.5162 14.2288 16.5667 13.1063C16.634 11.5864 17.1128 10.2333 18.265 9.21163C19.0524 8.51567 19.9857 8.17447 21.0012 8.04653C21.0742 8.04071 21.1453 8.01745 21.2182 8C21.8522 8 22.4844 8 23.1185 8Z" fill="#044123" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_252_3">
                                                <rect width="12" height="24" fill="white" transform="translate(13 8)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <div className='social_holder'>
                                <a href="#">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19.5" cy="19.5" r="19.5" fill="white" />
                                        <g clip-path="url(#clip0_252_3)">
                                            <path d="M29.9905 27.9651C29.9953 27.8952 29.9985 27.8555 29.9985 27.8157C29.9985 25.2367 30.0064 22.6576 29.9889 20.0786C29.9826 19.2014 29.8937 18.3258 29.6538 17.4741C29.3044 16.2314 28.6342 15.251 27.4018 14.7377C26.4711 14.35 25.4928 14.2626 24.5065 14.3563C23.0978 14.4914 21.9512 15.1111 21.1745 16.3331C21.1523 16.3681 21.1221 16.3967 21.0507 16.4793V14.6614H17.0913V27.9937H21.2222V27.6934C21.2222 25.6435 21.2158 23.592 21.2269 21.5421C21.2285 21.0638 21.2619 20.5823 21.3175 20.1072C21.4715 18.8089 22.1417 18.1034 23.3853 17.973C24.5764 17.8491 25.4356 18.3099 25.6707 19.5319C25.7977 20.1962 25.8327 20.8874 25.839 21.5659C25.8597 23.5999 25.847 25.6339 25.847 27.6679V27.9619H29.9905V27.9651Z" fill="white" />
                                            <path d="M14.4676 27.9999V14.6628H10.3511V27.9999H14.4676Z" fill="white" />
                                            <path d="M12.4077 12.8276C13.7195 12.8276 14.7979 11.7454 14.8106 10.4154C14.8233 9.10441 13.7291 8.00319 12.4125 8.00001C11.0927 7.99683 10.0016 9.08057 10 10.3979C9.99841 11.7343 11.0816 12.8276 12.4077 12.8276Z" fill="white" />
                                            <path d="M29.9905 27.965H25.847V27.671C25.847 25.637 25.8597 23.603 25.839 21.569C25.8327 20.8889 25.7977 20.1992 25.6707 19.535C25.4356 18.313 24.5764 17.8506 23.3853 17.9761C22.1417 18.1064 21.4715 18.812 21.3175 20.1102C21.2603 20.5853 21.2285 21.0668 21.2269 21.5451C21.2174 23.595 21.2222 25.6449 21.2222 27.6964V27.9968H17.0913V14.6629H21.0507V16.4808C21.1205 16.3982 21.1523 16.3696 21.1745 16.3346C21.9512 15.1126 23.0978 14.4913 24.5065 14.3578C25.4928 14.264 26.4711 14.3514 27.4018 14.7392C28.6358 15.2524 29.3044 16.2345 29.6538 17.4755C29.8937 18.3273 29.9826 19.2013 29.9889 20.08C30.0064 22.6591 29.9985 25.2381 29.9985 27.8172C29.9985 27.8569 29.9937 27.8966 29.9905 27.9666V27.965Z" fill="#044123" />
                                            <path d="M14.4676 27.9999H10.3511V14.6628H14.4676V27.9999Z" fill="#044123" />
                                            <path d="M12.4077 12.8276C11.0816 12.8292 9.99841 11.7343 10 10.3979C10.0016 9.08057 11.0927 7.99683 12.4125 8.00001C13.7306 8.00319 14.8233 9.10441 14.8106 10.4154C14.7979 11.7454 13.7195 12.8276 12.4077 12.8276Z" fill="#044123" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_252_3">
                                                <rect width="20" height="20" fill="white" transform="translate(10 8)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </a>
                            </div>
                            <div className='social_holder'>
                                <a href="#">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19.5" cy="19.5" r="19.5" fill="white" />
                                        <path d="M19.9999 24.4443C17.5453 24.4443 15.5554 22.4544 15.5554 19.9999C15.5554 17.5453 17.5453 15.5554 19.9999 15.5554C22.4545 15.5554 24.4443 17.5453 24.4443 19.9999C24.4443 22.4544 22.4545 24.4443 19.9999 24.4443Z" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 24.4444V15.5556C30 12.4873 27.5127 10 24.4444 10H15.5556C12.4873 10 10 12.4873 10 15.5556V24.4444C10 27.5127 12.4873 30 15.5556 30H24.4444C27.5127 30 30 27.5127 30 24.4444Z" stroke="#044123" stroke-width="2" />
                                        <path d="M13.8892 13.8991L13.8785 13.8872" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </a>
                            </div>


                        </div>

                        <div className={styles.line}></div>
                        <div className={styles.copyright}>
                            <p>
                                © cnexia 2023
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
