import { ImutationsList } from '../interfaces/interfaces';

export const forceResizeCharts = (fn: Function) => {
    const target = document.querySelectorAll(
        '#content > article .Gridster__Item'
    )[1];
    const config = {
        attributes: true,
        childList: false,
        subtree: false,
    };

    if (target) {
        const callback = function (mutationsList: ImutationsList[]) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes') {
                    fn();
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(target, config);
        return observer;
    }
};
