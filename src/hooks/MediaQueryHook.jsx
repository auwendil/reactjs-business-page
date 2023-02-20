import React, {useEffect, useState} from 'react';

export const sizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
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
    const val = sizes[media];
    if (!val) {
        return false;
    }

    return val < compareTo;
}

export function smallerOrEqualThan(media, compareTo) {
    const val = sizes[media];
    if (!val) {
        return false;
    }

    return val <= compareTo;
}

export function greaterThan(media, compareTo) {
    const val = sizes[media];
    if (!val) {
        return false;
    }

    return val > compareTo;
}

export function greaterOrEqualThan(media, compareTo) {
    const val = sizes[media];
    if (!val) {
        return false;
    }

    return val >= compareTo;
}

export const useClosestMedia = () => {
    const [closest, setClosest] = useState('sm');

    useEffect(() => {
        const listener = () => setClosest(findClosest(sizes));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener); //Cleanup
    }, []);

    return closest;
};

const useMediaQuery = (screen) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(min-width: ${sizes[screen]})`;
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

export default useClosestMedia;