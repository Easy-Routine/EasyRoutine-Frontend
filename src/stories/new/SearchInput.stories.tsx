/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import SearchInput from "headful/SearchInput/SearchInput";

type SearchInputProps = React.ComponentProps<typeof SearchInput>;

const meta: Meta<SearchInputProps> = {
    title: "Components/SearchInput", // Storybook에서 표시될 제목
    component: SearchInput,
};

export default meta;

type Story = StoryObj<SearchInputProps>;

export const DefaultSearchInput: Story = {
    render: () => (
        <SearchInput
            onInputChange={() => {}}
            onInputClear={() => {}}
            value=""
        />
    ),
};
