const settings = {
    API_BASE: 'http://codechallenge.meredith.com/code-challenge',
    AUTH_KEY: '8O9pTHEsVG0foXqPtoPtlCJeDhwYy4fx9oGOJcijqJU%3D',
    getPath: (path, token) => token
        ? `${settings.API_BASE}/${path}/?auth=${settings.AUTH_KEY}&token=${token}`
        : `${settings.API_BASE}/${path}/?auth=${settings.AUTH_KEY}`
};

export default settings;