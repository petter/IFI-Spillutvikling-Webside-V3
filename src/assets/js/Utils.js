export const isMobile = () => {
    return window.innerWidth < 425;
}

export const isTablet = () => {
    return 425 <= window.innerWidth && window.innerWidth < 1024;
}

export const isDesktop = () => {
    return window.innerWidth >= 1024;
}