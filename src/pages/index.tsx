import Logo from "../components/Layout/Logo";

function Home() {

  return (
    <div className='bg-white text-black'>
      <header className='navbar fixed top-0 left-0 z-50 w-full border-stroke bg-white duration-300 m-auto p-4 justify-between'>
        <div className='container relative lg:max-w-[1305px] lg:px-10'>
          <div className='flex items-center justify-between'>
            <div className='block py-4 lg:py-0'>
              <Logo />
            </div>

            <div className='flex items-center justify-end'>
              <a
                href='/dashboard'
                className='rounded-md bg-redpraha py-[6px] px-[12px] xl:py-[10px] xl:px-[30px] text-base font-medium text-white hover:bg-opacity-90'>
                  Launch dApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='home' className='pt-[65px]'>
          <div className='container lg:max-w-[1305px] lg:px-10'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-4 lg:w-7/12'>
                <div className='wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]' data-wow-delay='.2s'>
                  <span className='mb-5 block text-lg font-medium leading-tight text-black  sm:text-[22px] xl:text-[22px]'>
                    Ready to Use NextJS dapp.
                  </span>
                  <h1 className='mb-6 text-3xl font-bold leading-tight text-black  sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]'>
                    Using
                    <span className='inline bg-redpraha bg-clip-text text-transparent mx-2'>
                      TalentLayer & XMTP
                    </span>
                    protocols.
                  </h1>
                  <p className='mb-10 max-w-[475px] text-base leading-relaxed text-body'>
                    All essential components to start building an amazing dapp with interoperable
                    work and messaging
                  </p>

                  <div className='flex flex-wrap items-center'>
                    <a
                      target='_blank'
                      href='https://github.com/TalentLayer-Labs/starter-kit'
                      className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                      <span className='mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed '>
                        Fork Now
                      </span>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'>
                          <path
                            fill='#FFF'
                            d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                          />
                        </svg>
                      </span>
                    </a>

                    {/* <a
                      href='javascript:void(0)'
                      className='glightbox mb-6 inline-flex items-center py-4 text-black hover:text-primary '>
                      <span className='mr-[12px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-current'>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      <span className='text-base font-medium'>
                        <span className='block text-sm'> Watch Demo </span>
                        See how it works
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-5/12'>
                <div
                  className='wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0'
                  data-wow-delay='.3s'>
                  <img
                    src='/images/home/hero/hero-light.png'
                    alt='hero image'
                    className='mx-auto max-w-full'
                  />
                  <div className='max-auto absolute top-0 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-redpraha'>
                    <div className='absolute top-5 right-0'>
                      <svg
                        width='72'
                        height='51'
                        viewBox='0 0 72 51'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_5_3665)'>
                          <path
                            d='M22.378 0.4157C22.3814 0.342879 22.3851 0.270712 22.3891 0.199219C22.3857 0.271606 22.382 0.343766 22.378 0.4157C22.0401 7.83785 25.7079 22.0514 43.163 21.2025C36.0333 21.7022 21.9045 26.7677 22.3875 43.0291C22.1659 35.9367 17.5749 21.9221 1.00683 21.8442C0.856728 21.8465 0.709534 21.8469 0.56543 21.8454C0.713499 21.8439 0.86063 21.8435 1.00683 21.8442C8.04005 21.7355 21.4537 17.3609 22.378 0.4157Z'
                            fill='#ff0050'
                          />
                          <path
                            d='M59.3487 24.4888C59.3506 24.4451 59.3528 24.4018 59.3552 24.3589C59.3532 24.4023 59.351 24.4456 59.3487 24.4888C59.1459 28.942 61.3466 37.4702 71.8196 36.9608C67.5418 37.2606 59.0645 40.3 59.3543 50.0568C59.2213 45.8014 56.4667 37.3926 46.5259 37.3459C46.4359 37.3473 46.3475 37.3475 46.261 37.3466C46.3499 37.3457 46.4382 37.3454 46.5259 37.3459C50.7458 37.2807 58.794 34.6559 59.3487 24.4888Z'
                            fill='#1e293b'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_5_3665'>
                            <rect
                              width='71.2541'
                              height='49.8779'
                              fill='white'
                              transform='translate(0.56543 0.199219)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='absolute bottom-10 left-0'>
                      <svg
                        width='65'
                        height='36'
                        viewBox='0 0 65 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 1.83203C53.339 1.57898 51.3475 2.4214 49.2904 4.18456C45.9052 7.08611 40.0313 8.52953 34.7368 4.19769C32.4686 2.34195 30.4917 2.04856 28.8583 2.32079C27.1672 2.60264 25.7448 3.50424 24.6267 4.24961C22.8559 5.43014 20.9059 6.67067 18.66 6.9618C16.3417 7.2623 13.8664 6.54246 11.0465 4.19256C8.68539 2.22501 6.66504 1.84655 5.11312 2.08531C3.52522 2.32961 2.288 3.24185 1.57603 4.08328C1.25719 4.46008 0.69326 4.50708 0.316454 4.18824C-0.0603521 3.86941 -0.107346 3.30548 0.21149 2.92867C1.13803 1.83367 2.73868 0.642115 4.84131 0.318626C6.97991 -0.0103986 9.50274 0.579362 12.1908 2.81939C14.7333 4.93815 16.7266 5.40998 18.4302 5.18915C20.2062 4.95894 21.831 3.96513 23.6352 2.76234L24.131 3.50597L23.6352 2.76234C24.7515 2.01814 26.4572 0.908837 28.5644 0.557635C30.7295 0.196804 33.2212 0.648204 35.8687 2.81426C40.3566 6.48615 45.2562 5.28815 48.1272 2.82739C50.3886 0.889088 52.8657 -0.279434 55.6312 0.057691C58.3691 0.391448 61.1615 2.17558 64.1309 5.60179C64.4541 5.9748 64.4138 6.53924 64.0408 6.86252C63.6678 7.18579 63.1034 7.14547 62.7801 6.77246C59.9402 3.49563 57.5184 2.08846 55.4149 1.83203Z'
                          fill='#F76D8D'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 11.2026C53.339 10.9496 51.3475 11.792 49.2904 13.5552C45.9052 16.4567 40.0312 17.9001 34.7367 13.5683C32.4686 11.7126 30.4916 11.4192 28.8583 11.6914C27.1671 11.9732 25.7447 12.8748 24.6267 13.6202C22.8559 14.8007 20.9058 16.0413 18.66 16.3324C16.3417 16.6329 13.8663 15.9131 11.0464 13.5632C8.68536 11.5956 6.66501 11.2172 5.11309 11.4559C3.52519 11.7002 2.28797 12.6125 1.576 13.4539C1.25716 13.8307 0.69323 13.8777 0.316424 13.5588C-0.0603826 13.24 -0.107377 12.6761 0.211459 12.2993C1.138 11.2043 2.73865 10.0127 4.84128 9.68923C6.97988 9.36021 9.50271 9.94997 12.1907 12.19C14.7333 14.3088 16.7266 14.7806 18.4302 14.5598C20.2061 14.3295 21.831 13.3357 23.6352 12.1329L24.1309 12.8766L23.6352 12.1329C24.7515 11.3887 26.4572 10.2794 28.5644 9.92824C30.7294 9.56741 33.2212 10.0188 35.8686 12.1849C40.3565 15.8568 45.2562 14.6588 48.1271 12.198C50.3885 10.2597 52.8657 9.09117 55.6312 9.4283C58.3691 9.76205 61.1614 11.5462 64.1308 14.9724C64.4541 15.3454 64.4138 15.9098 64.0408 16.2331C63.6678 16.5564 63.1033 16.5161 62.7801 16.1431C59.9401 12.8662 57.5184 11.4591 55.4149 11.2026Z'
                          fill='#F76D8D'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 20.5825C53.339 20.3295 51.3475 21.1719 49.2904 22.935C45.9052 25.8366 40.0312 27.28 34.7367 22.9482C32.4686 21.0924 30.4916 20.7991 28.8583 21.0713C27.1671 21.3531 25.7447 22.2547 24.6267 23.0001C22.8559 24.1806 20.9058 25.4212 18.66 25.7123C16.3417 26.0128 13.8663 25.293 11.0464 22.9431C8.68536 20.9755 6.66501 20.597 5.11309 20.8358C3.52519 21.0801 2.28797 21.9923 1.576 22.8338C1.25716 23.2106 0.69323 23.2576 0.316424 22.9387C-0.0603826 22.6199 -0.107377 22.056 0.211459 21.6792C1.138 20.5842 2.73865 19.3926 4.84128 19.0691C6.97988 18.7401 9.50271 19.3299 12.1907 21.5699C14.7333 23.6886 16.7266 24.1605 18.4302 23.9396C20.2061 23.7094 21.831 22.7156 23.6352 21.5128L24.1309 22.2565L23.6352 21.5128C24.7515 20.7686 26.4572 19.6593 28.5644 19.3081C30.7294 18.9473 33.2212 19.3987 35.8686 21.5647C40.3565 25.2366 45.2562 24.0386 48.1271 21.5779C50.3885 19.6396 52.8657 18.4711 55.6312 18.8082C58.3691 19.1419 61.1614 20.9261 64.1308 24.3523C64.4541 24.7253 64.4138 25.2897 64.0408 25.613C63.6678 25.9363 63.1033 25.896 62.7801 25.523C59.9401 22.2461 57.5184 20.8389 55.4149 20.5825Z'
                          fill='#F76D8D'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 29.9619C53.339 29.7089 51.3475 30.5513 49.2904 32.3144C45.9052 35.216 40.0312 36.6594 34.7367 32.3276C32.4686 30.4718 30.4916 30.1784 28.8583 30.4507C27.1671 30.7325 25.7447 31.6341 24.6267 32.3795C22.8559 33.56 20.9058 34.8006 18.66 35.0917C16.3417 35.3922 13.8663 34.6723 11.0464 32.3224C8.68536 30.3549 6.66501 29.9764 5.11309 30.2152C3.52519 30.4595 2.28797 31.3717 1.576 32.2132C1.25716 32.59 0.69323 32.637 0.316424 32.3181C-0.0603826 31.9993 -0.107377 31.4354 0.211459 31.0586C1.138 29.9635 2.73865 28.772 4.84128 28.4485C6.97988 28.1195 9.50271 28.7092 12.1907 30.9493C14.7333 33.068 16.7266 33.5399 18.4302 33.319C20.2061 33.0888 21.831 32.095 23.6352 30.8922L24.1309 31.6359L23.6352 30.8922C24.7515 30.148 26.4572 29.0387 28.5644 28.6875C30.7294 28.3267 33.2212 28.7781 35.8686 30.9441C40.3565 34.616 45.2562 33.418 48.1271 30.9573C50.3885 29.019 52.8657 27.8504 55.6312 28.1876C58.3691 28.5213 61.1614 30.3055 64.1308 33.7317C64.4541 34.1047 64.4138 34.6691 64.0408 34.9924C63.6678 35.3157 63.1033 35.2754 62.7801 34.9023C59.9401 31.6255 57.5184 30.2183 55.4149 29.9619Z'
                          fill='#F76D8D'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='work-process' className='relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                How it Works?
              </h2>
              <p className='text-base text-body'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
                Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
              </p>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <svg
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_40_12)'>
                          <path
                            d='M21.6667 16.6667H30L20 26.6667L10 16.6667H18.3333V5H21.6667V16.6667ZM6.66668 31.6667H33.3333V20H36.6667V33.3333C36.6667 33.7754 36.4911 34.1993 36.1785 34.5118C35.866 34.8244 35.442 35 35 35H5.00001C4.55798 35 4.13406 34.8244 3.8215 34.5118C3.50894 34.1993 3.33334 33.7754 3.33334 33.3333V20H6.66668V31.6667Z'
                            fill='currentColor'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_40_12'>
                            <rect width='40' height='40' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Fork the code
                    </h3>
                    <p className='text-base text-body'>
                      All the code is fully open source, you can use it for any purposes,{' '}
                      <a
                        className='underline'
                        target='_blank'
                        href='https://docs.talentlayer.org/get-a-platform-id'>
                        it's here
                      </a>
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <svg
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_40_15)'>
                          <path
                            d='M20 36.6667C10.795 36.6667 3.33333 29.205 3.33333 20C3.33333 10.795 10.795 3.33337 20 3.33337C29.205 3.33337 36.6667 10.795 36.6667 20C36.6667 29.205 29.205 36.6667 20 36.6667ZM11.6883 30.4267C14.0476 32.3129 16.9795 33.3382 20 33.3334C23.2833 33.3334 26.2883 32.1467 28.6117 30.18C27.5262 29.0663 26.2284 28.1815 24.7951 27.578C23.3617 26.9746 21.8219 26.6647 20.2667 26.6667C18.6543 26.6648 17.0592 26.9981 15.5824 27.6454C14.1057 28.2927 12.7796 29.2398 11.6883 30.4267ZM9.36 28.0334C10.7608 26.5468 12.4511 25.3629 14.3269 24.5546C16.2027 23.7462 18.2241 23.3306 20.2667 23.3334C22.2361 23.3308 24.1866 23.7173 26.0062 24.4707C27.8259 25.224 29.4788 26.3294 30.87 27.7234C32.2968 25.7152 33.1394 23.3511 33.3043 20.8932C33.4692 18.4354 32.9499 15.9798 31.8041 13.7991C30.6584 11.6184 28.9309 9.79775 26.8133 8.53912C24.6957 7.28049 22.2708 6.6331 19.8077 6.66879C17.3445 6.70448 14.9394 7.42185 12.8592 8.7413C10.779 10.0608 9.10493 11.9307 8.02282 14.1437C6.94071 16.3567 6.49282 18.8262 6.72886 21.2783C6.9649 23.7304 7.87562 26.0691 9.36 28.035V28.0334ZM20 21.6667C18.2319 21.6667 16.5362 20.9643 15.286 19.7141C14.0357 18.4638 13.3333 16.7682 13.3333 15C13.3333 13.2319 14.0357 11.5362 15.286 10.286C16.5362 9.03575 18.2319 8.33337 20 8.33337C21.7681 8.33337 23.4638 9.03575 24.714 10.286C25.9643 11.5362 26.6667 13.2319 26.6667 15C26.6667 16.7682 25.9643 18.4638 24.714 19.7141C23.4638 20.9643 21.7681 21.6667 20 21.6667ZM20 18.3334C20.8841 18.3334 21.7319 17.9822 22.357 17.3571C22.9821 16.7319 23.3333 15.8841 23.3333 15C23.3333 14.116 22.9821 13.2681 22.357 12.643C21.7319 12.0179 20.8841 11.6667 20 11.6667C19.1159 11.6667 18.2681 12.0179 17.643 12.643C17.0179 13.2681 16.6667 14.116 16.6667 15C16.6667 15.8841 17.0179 16.7319 17.643 17.3571C18.2681 17.9822 19.1159 18.3334 20 18.3334Z'
                            fill='currentColor'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_40_15'>
                            <rect width='40' height='40' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Setup
                    </h3>
                    <p className='text-base text-body'>
                      Setup your local environnement by copying the .env.example and adjust the
                      variables
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <svg
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_40_18)'>
                          <path
                            d='M5.26834 7.44836C7.20178 5.51458 9.79501 4.38351 12.5277 4.28211C15.2603 4.18072 17.9302 5.11651 20.0017 6.9017C22.0713 5.11948 24.7377 4.18475 27.467 4.28463C30.1964 4.38452 32.7873 5.51165 34.7211 7.44037C36.6549 9.3691 37.7888 11.9571 37.8959 14.6862C38.0029 17.4153 37.0751 20.0841 35.2983 22.1584L22.3567 35.1417C21.7621 35.7365 20.9646 36.0845 20.1242 36.1161C19.2838 36.1476 18.4625 35.8603 17.825 35.3117L17.6417 35.1434L4.70168 22.1584C2.92583 20.0859 1.99764 17.4195 2.1027 14.6923C2.20776 11.9651 3.33832 9.37805 5.26834 7.44836ZM7.62501 9.80503C6.26208 11.1683 5.47643 13.0041 5.43112 14.9313C5.38581 16.8585 6.08432 18.7292 7.38168 20.155L7.62501 20.4117L20 32.7867L28.8383 23.9467L22.9467 18.055L21.18 19.8217C20.7158 20.2861 20.1646 20.6546 19.558 20.906C18.9514 21.1575 18.3012 21.287 17.6445 21.2871C16.3183 21.2874 15.0463 20.7609 14.1083 19.8234C13.1704 18.8858 12.6432 17.6141 12.6429 16.2879C12.6426 14.9617 13.1691 13.6897 14.1067 12.7517L17.61 9.2467C16.2158 8.13399 14.4707 7.55451 12.6878 7.61224C10.9049 7.66997 9.20099 8.36112 7.88168 9.5617L7.62501 9.80503ZM21.7683 14.5184C22.0809 14.2059 22.5047 14.0304 22.9467 14.0304C23.3886 14.0304 23.8125 14.2059 24.125 14.5184L31.195 21.5884L32.375 20.4117C33.7608 19.0269 34.5497 17.1549 34.5731 15.196C34.5964 13.237 33.8524 11.3467 32.5 9.92929C31.1477 8.51185 29.2944 7.67981 27.3366 7.61112C25.3787 7.54242 23.4717 8.24253 22.0233 9.5617L21.7683 9.80503L16.465 15.1084C16.1761 15.3971 16.0033 15.7818 15.9793 16.1895C15.9554 16.5972 16.0819 16.9995 16.335 17.32L16.465 17.465C16.7537 17.7539 17.1384 17.9267 17.5461 17.9507C17.9538 17.9747 18.3561 17.8481 18.6767 17.595L18.8217 17.465L21.7683 14.5184Z'
                            fill='currentColor'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_40_18'>
                            <rect width='40' height='40' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Enjoy and code!
                    </h3>
                    <p className='text-base text-body'>
                      You can now start coding and improve the basic messaging system with your
                      incredible features!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute -top-28 left-0 -z-10 hidden md:block'>
            <svg
              width='632'
              height='1179'
              viewBox='0 0 632 1179'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_38_24)'>
                <circle cx='42.5' cy='589.5' r='329.5' fill='url(#paint0_linear_38_24)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_24'
                  x='-547'
                  y='0'
                  width='1179'
                  height='1179'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_38_24' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_24'
                  x1='-366.218'
                  y1='919'
                  x2='451.176'
                  y2='349.901'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='absolute right-0 top-20 -z-10'>
            <svg
              width='637'
              height='1277'
              viewBox='0 0 637 1277'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_38_23)'>
                <circle cx='638.5' cy='638.5' r='388.5' fill='url(#paint0_linear_38_23)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_23'
                  x='0'
                  y='0'
                  width='1277'
                  height='1277'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_38_23' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_23'
                  x1='250'
                  y1='250'
                  x2='1168.59'
                  y2='782.957'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='faq' className='relative z-10 bg-[#F8FAFB] py-[110px] '>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Frequently Asked Questions
              </h2>
              <p className='text-base text-body'>
                Find answers to commonly asked questions about our Next.js starter kit for
                TalentLayer and XMTP integration, helping you navigate through the implementation
                process and make the most out of the powerful features provided.
              </p>
            </div>

            <div
              className='faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-car'
              data-wow-delay='.3s'>
              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  Are there any specific requirements or dependencies for using the starter kit?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>Just NodeJS & npm</p>
                </div>
              </div>

              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  Do I need an admin account for XMTP?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    No, you do not need an admin account to use XMTP. The XMTP protocol is designed
                    to be plug and play, allowing users to seamlessly integrate and utilize its
                    functionality without the need for an admin account.
                  </p>
                </div>
              </div>

              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  Can I extend the review system to include additional criteria or metrics?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    Yes, TalentLayer the minimum viable for interoperability. You can add any other
                    fields in the IPFS json linked to a review. This is also the case for user
                    profile and service data.
                  </p>
                </div>
              </div>

              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  Do I need a TalentLayer platform Id?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    Yes it's better to mint your platformId, it will let you configure your
                    platform, define fees and other important setup.{' '}
                    <a className='underline' href='https://docs.talentlayer.org/get-a-platform-id'>
                      See more here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute right-0 -top-24 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='95' cy='95' r='77' stroke='url(#paint0_linear_49_603)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_49_603'
                  x1='0'
                  y1='0'
                  x2='224.623'
                  y2='130.324'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute left-0 -bottom-24 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cy='95' r='77' stroke='url(#paint0_linear_52_83)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_52_83'
                  x1='-117.84'
                  y1='190'
                  x2='117.828'
                  y2='25.9199'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#0f172a' />
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='support' className='pt-[100px] pb-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-10 max-w-[690px] text-center'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Need any help?
              </h2>
              <p className='text-base text-body'>
                Please contact us on the hackhathon discords or direclty inside the dapp using xmtp
                support conversation :)
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className='wow fadeInUp bg-redpraha py-7' data-wow-delay='.2s'>
          <div className='container max-w-[1390px]'>
            <div className='-mx-3 flex flex-wrap'>
              <div className='order-last w-full px-3 lg:order-first lg:w-1/3'>
                <p className='mt-4 text-center text-base text-white lg:mt-0 lg:text-left'>
                  &copy; 2023 StartKit
                </p>
              </div>

              <div className='w-full px-3 md:w-1/2 lg:w-1/3'>
                <div className='mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center'>
                  <a
                    href='https://twitter.com/TalentLayer'
                    className='text-white opacity-70 hover:opacity-100'
                    target='_blank'
                    aria-label='social icon'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g clipPath='url(#clip0_53_166)'>
                        <path
                          d='M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.571 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09713 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04688 18.1321C3.98458 18.4293 2.87413 18.5142 1.779 18.3819C3.6907 19.6114 5.9161 20.2641 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_53_166'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href='https://twitter.com/xmtp_'
                    className='text-white opacity-70 hover:opacity-100'
                    target='_blank'
                    aria-label='social icon'
                    style={{ transform: `rotateY(180deg)` }}>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g clipPath='url(#clip0_53_166)'>
                        <path
                          d='M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.571 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09713 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04688 18.1321C3.98458 18.4293 2.87413 18.5142 1.779 18.3819C3.6907 19.6114 5.9161 20.2641 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_53_166'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
