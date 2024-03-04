const esModules = [
    'query-string',
    'decode-uri-component',
    'split-on-first',
    'filter-obj',
];

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : [],
}