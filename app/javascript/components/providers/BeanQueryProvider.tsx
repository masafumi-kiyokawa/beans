import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { BeanQuery } from '../types/BeanQuery';

interface BeanQueryContextType {
    beanQuery: BeanQuery;
    setBeanQuery: React.Dispatch<React.SetStateAction<BeanQuery>>;
}

export const BeanQueryContext = createContext<BeanQueryContextType | undefined>(
    undefined,
);

export function useBeanQueryContext(): BeanQueryContextType {
    const beanQueryContext = useContext(BeanQueryContext);

    if (beanQueryContext === undefined) {
        throw new Error(
            'useBeanQueryContext must be used with a BeanQueryContext',
        );
    }

    return beanQueryContext;
}

interface Props {
    children: ReactNode;
}

export const BeanQueryProvider = ({ children }: Props): ReactNode => {
    const [beanQuery, setBeanQuery] = useState<BeanQuery>({
        country: '',
        searchText: '',
    });
    const contextValue = React.useMemo(
        () => ({
            beanQuery,
            setBeanQuery,
        }),
        [beanQuery, setBeanQuery],
    );
    return (
        <BeanQueryContext.Provider value={contextValue}>
            {children}
        </BeanQueryContext.Provider>
    );
};
