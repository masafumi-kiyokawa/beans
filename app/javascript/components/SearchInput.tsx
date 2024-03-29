import React, { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useBeanQueryContext } from './providers/BeanQueryProvider';

const SearchInput = (): ReactNode => {
    const { beanQuery, setBeanQuery } = useBeanQueryContext();

    const ref = useRef<HTMLInputElement>(null);

    const onSearch = (searchText: string): void => {
        setBeanQuery({ ...beanQuery, searchText });
    };

    const onReset = (): void => {
        setBeanQuery({ searchText: '', country: '' });
        setSearchText('');
    };

    const [searchText, setSearchText] = useState('');
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setSearchText(event.target.value);
    };

    const navigte = useNavigate();

    return (
        <form
            className="search"
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current !== null) onSearch(ref.current.value);
                navigte('/beans');
            }}
            style={{ width: '100%', marginLeft: '20px' }}
        >
            <InputGroup>
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
                <Input
                    ref={ref}
                    placeholder="Search Beans..."
                    variant="filled"
                    boxShadow="base"
                    value={searchText}
                    id="search"
                    onChange={handleInputChange}
                />
                <InputRightElement w={16}>
                    <Button size="sm" onClick={onReset}>
                        <Text fontSize="xs">Reset</Text>
                    </Button>
                </InputRightElement>
            </InputGroup>
        </form>
    );
};

export default SearchInput;
