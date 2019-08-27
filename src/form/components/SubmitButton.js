/*
 * Copyright (C) 2019 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";
import PropTypes from "prop-types";

import { Button } from "bootstrap/Button";

export const STATES = {
    READY: 1,
    SAVING: 2,
    LOAD: 3,
};

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    state: PropTypes.oneOf(Object.keys(STATES).map((key) => STATES[key])),
};

export function SubmitButton({ disabled, state, ...props }) {
    const disableSubmitButton = disabled || state !== STATES.READY;
    const loadingSubmitButton = state !== STATES.READY;

    let labelSubmitButton;
    switch (state) {
    case STATES.SAVING:
        labelSubmitButton = _("Updating");
        break;
    case STATES.LOAD:
        labelSubmitButton = _("Load settings");
        break;
    default:
        labelSubmitButton = _("Save");
    }

    return (
        <Button
            loading={loadingSubmitButton}
            disabled={disableSubmitButton}
            forisFormSize

            {...props}
        >
            {labelSubmitButton}
        </Button>
    );
}
