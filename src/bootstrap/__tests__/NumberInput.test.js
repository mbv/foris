/*
 * Copyright (C) 2019 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import { render, fireEvent, getByLabelText, wait } from "customTestRender";

import { NumberInput } from "../NumberInput";

describe("<NumberInput/>", () => {
    const onChangeMock = jest.fn();
    let componentContainer;

    beforeEach(() => {
        const { container } = render(
            <NumberInput
                label="Test label"
                helpText="Some help text"
                value={1}
                onChange={onChangeMock}
            />
        );
        componentContainer = container;
    });

    it("Render number input", () => {
        expect(componentContainer.firstChild).toMatchSnapshot();
    });

    it("Increase number with button", async () => {
        const increaseButton = getByLabelText(componentContainer, "Increase");
        fireEvent.mouseDown(increaseButton);
        await wait(() => expect(onChangeMock).toHaveBeenCalledWith({"target": {"value": 2}}));
    });

    it("Decrease number with button", async () => {
        const decreaseButton = getByLabelText(componentContainer, "Decrease");
        fireEvent.mouseDown(decreaseButton);
        await wait(() => expect(onChangeMock).toHaveBeenCalledWith({"target": {"value": 0}}));
    });
});
