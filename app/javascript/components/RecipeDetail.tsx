import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@chakra-ui/react';
import { fetchRecipeFunction } from './functions/fetchRecipefunction';
import EditRecipe from './EditRecipe';
import RecipeInfo from './RecipeInfo';

const RecipeDetail = (): ReactNode => {
    const { id } = useParams();
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['recipe', id],
        queryFn: async () => fetchRecipeFunction(id),
    });
    useEffect(() => {}, [data]);
    if (isError) return <div>Error</div>;
    if (isLoading) return <div>Loading...</div>;
    if (data === undefined) return <div>error</div>;

    return (
        <Box p="16px">
            <Routes>
                <Route
                    path="/edit"
                    element={<EditRecipe recipe={data} refetch={refetch} />}
                />
                <Route path="/*" element={<RecipeInfo recipe={data} />} />
            </Routes>
        </Box>
    );
};

export default RecipeDetail;
