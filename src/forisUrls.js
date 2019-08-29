export const REFORIS_URL_PREFIX = process.env.LIGHTTPD ? "/reforis" : "";

export const ForisURLs = {
    login: `${REFORIS_URL_PREFIX}/login`,
    static: `${REFORIS_URL_PREFIX}/static/reforis`,
    wifi: `${REFORIS_URL_PREFIX}/network-settings/wifi`,
    updates: `${REFORIS_URL_PREFIX}/updates`,

    // Notifications links are used with <Link/> inside Router, thus url subdir is not required.
    notifications: "/notifications",
    notificationsSettings: "/administration/notifications-settings",

    luci: "/cgi-bin/luci",
};
