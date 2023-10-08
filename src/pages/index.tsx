import Logo from "../components/Layout/Logo";

import Image from 'next/image'

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
                className='rounded-md bg-[#FFAE00] py-[6px] px-[12px] xl:py-[10px] xl:px-[30px] text-base font-bold text-white hover:bg-opacity-90'>
                  Launch dApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='home' className='pt-[20vh]'>
          <div className='container lg:max-w-[1305px] lg:px-10'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-4 lg:w-7/12'>
                <div className='wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]' data-wow-delay='.2s'>
                  <span className='mb-5 block text-lg font-medium leading-tight text-black  sm:text-[22px] xl:text-[22px]'>
                    The go-to platform to handle decentralized bounties 
                  </span>
                  <h1 className='mb-6 text-3xl font-bold leading-tight text-black sm:text-[40px] md:text-[42px] lg:text-[42px] xl:text-[42px]'>
                    Leveraging
                    <span className='inline bg-[#FFAE00] bg-clip-text text-transparent mx-2'>
                      Voting System and Verifiable Credentials
                    </span>
                  </h1>
                  <p className='mb-10 max-w-[475px] text-base leading-relaxed text-body'>
                  </p>

                  <div className='flex flex-wrap items-center'>
                    <a
                      target='_blank'
                      href='https://github.com/bianc8/BountyArena'
                      className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                      <span className='mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed '>
                        View Repo
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

                    <a
                      href='https://www.youtube.com/watch?v='
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
                        <span className='block text-sm'>Watch Demo </span>
                        See how it works
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-5/12'>
                <div
                  className='wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0'
                  data-wow-delay='.3s'>
                  <img
                    src='/images/home/hero/limone_soldier.png'
                    alt='hero image'
                    className='mx-auto max-w-full'
                  />
                  <div className='max-auto absolute top-0 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-[#FFAE00]'>
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
                            fill='#FFAE00'
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
                          fill='#FF5500'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 11.2026C53.339 10.9496 51.3475 11.792 49.2904 13.5552C45.9052 16.4567 40.0312 17.9001 34.7367 13.5683C32.4686 11.7126 30.4916 11.4192 28.8583 11.6914C27.1671 11.9732 25.7447 12.8748 24.6267 13.6202C22.8559 14.8007 20.9058 16.0413 18.66 16.3324C16.3417 16.6329 13.8663 15.9131 11.0464 13.5632C8.68536 11.5956 6.66501 11.2172 5.11309 11.4559C3.52519 11.7002 2.28797 12.6125 1.576 13.4539C1.25716 13.8307 0.69323 13.8777 0.316424 13.5588C-0.0603826 13.24 -0.107377 12.6761 0.211459 12.2993C1.138 11.2043 2.73865 10.0127 4.84128 9.68923C6.97988 9.36021 9.50271 9.94997 12.1907 12.19C14.7333 14.3088 16.7266 14.7806 18.4302 14.5598C20.2061 14.3295 21.831 13.3357 23.6352 12.1329L24.1309 12.8766L23.6352 12.1329C24.7515 11.3887 26.4572 10.2794 28.5644 9.92824C30.7294 9.56741 33.2212 10.0188 35.8686 12.1849C40.3565 15.8568 45.2562 14.6588 48.1271 12.198C50.3885 10.2597 52.8657 9.09117 55.6312 9.4283C58.3691 9.76205 61.1614 11.5462 64.1308 14.9724C64.4541 15.3454 64.4138 15.9098 64.0408 16.2331C63.6678 16.5564 63.1033 16.5161 62.7801 16.1431C59.9401 12.8662 57.5184 11.4591 55.4149 11.2026Z'
                          fill='#FF5500'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 20.5825C53.339 20.3295 51.3475 21.1719 49.2904 22.935C45.9052 25.8366 40.0312 27.28 34.7367 22.9482C32.4686 21.0924 30.4916 20.7991 28.8583 21.0713C27.1671 21.3531 25.7447 22.2547 24.6267 23.0001C22.8559 24.1806 20.9058 25.4212 18.66 25.7123C16.3417 26.0128 13.8663 25.293 11.0464 22.9431C8.68536 20.9755 6.66501 20.597 5.11309 20.8358C3.52519 21.0801 2.28797 21.9923 1.576 22.8338C1.25716 23.2106 0.69323 23.2576 0.316424 22.9387C-0.0603826 22.6199 -0.107377 22.056 0.211459 21.6792C1.138 20.5842 2.73865 19.3926 4.84128 19.0691C6.97988 18.7401 9.50271 19.3299 12.1907 21.5699C14.7333 23.6886 16.7266 24.1605 18.4302 23.9396C20.2061 23.7094 21.831 22.7156 23.6352 21.5128L24.1309 22.2565L23.6352 21.5128C24.7515 20.7686 26.4572 19.6593 28.5644 19.3081C30.7294 18.9473 33.2212 19.3987 35.8686 21.5647C40.3565 25.2366 45.2562 24.0386 48.1271 21.5779C50.3885 19.6396 52.8657 18.4711 55.6312 18.8082C58.3691 19.1419 61.1614 20.9261 64.1308 24.3523C64.4541 24.7253 64.4138 25.2897 64.0408 25.613C63.6678 25.9363 63.1033 25.896 62.7801 25.523C59.9401 22.2461 57.5184 20.8389 55.4149 20.5825Z'
                          fill='#FF5500'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M55.4149 29.9619C53.339 29.7089 51.3475 30.5513 49.2904 32.3144C45.9052 35.216 40.0312 36.6594 34.7367 32.3276C32.4686 30.4718 30.4916 30.1784 28.8583 30.4507C27.1671 30.7325 25.7447 31.6341 24.6267 32.3795C22.8559 33.56 20.9058 34.8006 18.66 35.0917C16.3417 35.3922 13.8663 34.6723 11.0464 32.3224C8.68536 30.3549 6.66501 29.9764 5.11309 30.2152C3.52519 30.4595 2.28797 31.3717 1.576 32.2132C1.25716 32.59 0.69323 32.637 0.316424 32.3181C-0.0603826 31.9993 -0.107377 31.4354 0.211459 31.0586C1.138 29.9635 2.73865 28.772 4.84128 28.4485C6.97988 28.1195 9.50271 28.7092 12.1907 30.9493C14.7333 33.068 16.7266 33.5399 18.4302 33.319C20.2061 33.0888 21.831 32.095 23.6352 30.8922L24.1309 31.6359L23.6352 30.8922C24.7515 30.148 26.4572 29.0387 28.5644 28.6875C30.7294 28.3267 33.2212 28.7781 35.8686 30.9441C40.3565 34.616 45.2562 33.418 48.1271 30.9573C50.3885 29.019 52.8657 27.8504 55.6312 28.1876C58.3691 28.5213 61.1614 30.3055 64.1308 33.7317C64.4541 34.1047 64.4138 34.6691 64.0408 34.9924C63.6678 35.3157 63.1033 35.2754 62.7801 34.9023C59.9401 31.6255 57.5184 30.2183 55.4149 29.9619Z'
                          fill='#FF5500'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='work-process' className='relative z-10 pt-[110px] pb-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Bounty candidates
              </h2>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto p-2 mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/talent_layer.png' className='' alt="talent layer logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      TalentLayer
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/ens.png' alt="ens logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      ENS
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/snapshot.png' alt="snapshot logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Snapshot
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/talent_protocol.svg' alt="talent protocol logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Talent Protocol
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/the_graph.png' alt="the graph logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      The Graph
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/spaghettEth.png' alt="spaghettETH logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      SpaghettETH
                    </h3>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-white bg-opacity-20 text-[#FFAE00] duration-300'>
                      <Image src='/sponsor/interface.png' alt="interface logo" width={90} height={90} />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Interface
                    </h3>
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
              height='637'
              viewBox='0 0 637 637'
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
                  width='640'
                  height='640'
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
      </main>

      <footer>
        <div className='wow fadeInUp bg-[#FFAE00] py-7' data-wow-delay='.2s'>
          <div className='container max-w-[1390px]'>
            <div className='-mx-3 flex flex-wrap'>
              <div className='order-last w-full px-3 lg:order-first lg:w-1/3'>
                <p className='mt-4 text-center text-base text-white lg:mt-0 lg:text-left'>
                  &copy; 2023 BountyArena.eth
                </p>
              </div>

              <div className='w-full px-3 md:w-1/2 lg:w-1/3'>
                <div className='mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center'>
                <a
                      target='_blank'
                      href='https://github.com/bianc8/BountyArena'
                      className='rounded-lg text-white hover:bg-opacity-90'>
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
