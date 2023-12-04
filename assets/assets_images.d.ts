type ImageKeys =
    | 'search_dark'
    | 'home_dark'
    | 'profile_dark'
    | 'info_dark'
    | 'checkbox_round_checked'
    | 'checkbox_round'
    | 'ratings_full_check_primary'
    | 'ratings_full_empty'
    | 'arrow_left_indicate_light'
    | 'dropdown_arrow_grey';

declare const assets_images: {
    [key in ImageKeys]: string;
};

export { assets_images };
