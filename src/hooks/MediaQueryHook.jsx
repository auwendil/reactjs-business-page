import React, {useEffect, useState} from 'react';

export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

function isMatch(media) {
    const query = `(min-width: ${media}px)`;
    return window.matchMedia(query).matches;
}

function findClosest(queries) {
    const keys = Object.keys(queries);
    for (let i = keys.length - 1; i >= 0; i--) {
        if (isMatch(queries[keys[i]])) {
            return keys[i];
        }
    }
    return 'sm';
}

export function smallerThan(media, compareTo) {
    const val = breakpoints[media];
    if (!val) {
        return false;
    }

    return val < compareTo;
}

export function smallerOrEqualThan(media, compareTo) {
    const val = breakpoints[media];
    if (!val) {
        return false;
    }

    return val <= compareTo;
}

export function greaterThan(media, compareTo) {
    const val = breakpoints[media];
    if (!val) {
        return false;
    }

    return val > compareTo;
}

export function greaterOrEqualThan(media, compareTo) {
    const val = breakpoints[media];
    if (!val) {
        return false;
    }

    return val >= compareTo;
}

export function isSm(media) {
    return smallerOrEqualThan(media, breakpoints.sm);
}

export function isMd(media) {
    return smallerOrEqualThan(media, breakpoints.md);
}

export function isLg(media) {
    return smallerOrEqualThan(media, breakpoints.lg);
}

export function isXl(media) {
    return smallerOrEqualThan(media, breakpoints.xl);
}

export function isXxl(media) {
    return smallerOrEqualThan(media, breakpoints.xxl);
}


// export const useClosestMedia = () => {
//     const [closest, setClosest] = useState('sm');
//
//     useEffect(() => {
//         const listener = () => setClosest(findClosest(sizes));
//         listener();
//         window.addEventListener('resize', listener);
//         return () => window.removeEventListener('resize', listener); //Cleanup
//     }, []);
//
//     return closest;
// };
//


export const useMedia = () => {
    const [media, setMedia] = useState('sm');

    useEffect(() => {
        const listener = () => setMedia(findClosest(breakpoints));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener); //Cleanup
    }, []);

    return {
        current: media,
        minSm: breakpoints[media] <= breakpoints.sm,
        minMd: breakpoints[media] <= breakpoints.md,
        minLg: breakpoints[media] <= breakpoints.lg,
        minXl: breakpoints[media] <= breakpoints.xl,
        minXxl: breakpoints[media] <= breakpoints.xxl,
        maxSm: breakpoints[media] >= breakpoints.sm,
        maxMd: breakpoints[media] >= breakpoints.md,
        maxLg: breakpoints[media] >= breakpoints.lg,
        maxXl: breakpoints[media] >= breakpoints.xl,
        maxXxl: breakpoints[media] >= breakpoints.xxl,
    };
};

const useMediaQuery = (screen) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(min-width: ${breakpoints[screen]})`;
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, screen]);

    return matches;
};

export default useMedia;