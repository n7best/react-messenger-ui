export const MESSAGING_TYPE = {
  RESPONSE: 'RESPONSE',
  UPDATE: 'UPDATE',
  MESSAGE_TAG: 'MESSAGE_TAG',
  NON_PROMOTIONAL_SUBSCRIPTION: 'NON_PROMOTIONAL_SUBSCRIPTION'
};

export const SENDER_ACTIONS = {
  MARK_SEEN: 'mark_seen',
  TYPING_ON: 'typing_on',
  TYPING_OFF: 'typing_off'
};

export const NOTIFICATION_TYPE = {
  REGULAR: 'REGULAR',
  SILENT_PUSH: 'SILENT_PUSH',
  NO_PUSH: 'NO_PUSH'
};

// offline tags
export const TAGS = {
  PAIRING_UPDATE: 'PAIRING_UPDATE',
  APPLICATION_UPDATE: 'APPLICATION_UPDATE',
  ACCOUNT_UPDATE: 'ACCOUNT_UPDATE',
  PAYMENT_UPDATE: 'PAYMENT_UPDATE',
  PERSONAL_FINANCE_UPDATE: 'PERSONAL_FINANCE_UPDATE',
  SHIPPING_UPDATE: 'SHIPPING_UPDATE',
  RESERVATION_UPDATE: 'RESERVATION_UPDATE',
  ISSUE_RESOLUTION: 'ISSUE_RESOLUTION',
  APPOINTMENT_UPDATE: 'APPOINTMENT_UPDATE',
  GAME_EVENT: 'GAME_EVENT',
  TRANSPORTATION_UPDATE: 'TRANSPORTATION_UPDATE',
  FEATURE_FUNCTIONALITY_UPDATE: 'FEATURE_FUNCTIONALITY_UPDATE',
  TICKET_UPDATE: 'TICKET_UPDATE'
};

export const ATTACHMENT_TYPE = {
  IMAGE: 'image',
  AUDIO: 'audio',
  VIDEO: 'video',
  FILE: 'file',
  TEMPLATE: 'template'
};

export const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video'
};

export const ATTACHMENT_SOURCE = {
  URL: 'url',
  FILE: 'file',
  SAVED_ASSET: 'attachment_id'
};

export const QUICKREPLY_TYPE = {
  TEXT: 'text',
  LOCATION: 'location'
};

export const MAX_QUICK_REPLIES = 11;

export const TEMPLATE_TYPE = {
  BUTTON: 'button',
  GENERIC: 'generic',
  LIST: 'list',
  OPEN_GRAPH: 'open_graph',
  MEDIA: 'media',
  RECEIPT: 'receipt',
  AIRLINE: 'airline'
};

export const BUTTON_TYPE = {
  URL: 'web_url',
  POSTBACK: 'postback',
  SHARE: 'element_share',
  BUY: 'payment',
  CALL: 'phone_number',
  LOG_IN: 'account_link',
  LOG_OUT: 'account_unlink',
  GAME_PLAY: 'game_play',
  NESTED_MENU: 'nested'
};

export const BUTTON_TEMPLATE_SUPPORT = {
  [BUTTON_TYPE.URL]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA,
    TEMPLATE_TYPE.OPEN_GRAPH,
    'persistent_menu'
  ],
  [BUTTON_TYPE.POSTBACK]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA,
    'persistent_menu'
  ],
  [BUTTON_TYPE.SHARE]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.BUY]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.CALL]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.LOG_IN]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.LOG_OUT]: [
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.GAME_PLAY]: [
    // todo: pending documentation update
    TEMPLATE_TYPE.GENERIC,
    TEMPLATE_TYPE.LIST,
    TEMPLATE_TYPE.BUTTON,
    TEMPLATE_TYPE.MEDIA
  ],
  [BUTTON_TYPE.NESTED_MENU]: [
    'persistent_menu'
  ]
};

export const BUTTON_TEMPLATE_TEXT_MAXLENGTH = 640;

export const WEBVIEW_HEIGHT_RATIO = {
  COMPACT: 'compact',
  TALL: 'tall',
  FULL: 'full'
};

export const IMAGE_ASPECT_RATIO = {
  HORIZONTAL: 'horizontal',
  SQUARE: 'square'
};

export const TOP_ELEMENT_STYLE = {
  COMPACT: 'compact',
  LARGE: 'large'
};

export const LOCALES = ['default', 'en_US', 'ca_ES', 'cs_CZ', 'cx_PH', 'cy_GB', 'da_DK', 'de_DE', 'eu_ES', 'en_UD', 'es_LA', 'es_ES', 'gn_PY', 'fi_FI', 'fr_FR', 'gl_ES', 'hu_HU', 'it_IT', 'ja_JP', 'ko_KR', 'nb_NO', 'nn_NO', 'nl_NL', 'fy_NL', 'pl_PL', 'pt_BR', 'pt_PT', 'ro_RO', 'ru_RU', 'sk_SK', 'sl_SI', 'sv_SE', 'th_TH', 'tr_TR', 'ku_TR', 'zh_CN', 'zh_HK', 'zh_TW', 'af_ZA', 'sq_AL', 'hy_AM', 'az_AZ', 'be_BY', 'bn_IN', 'bs_BA', 'bg_BG', 'hr_HR', 'nl_BE', 'en_GB', 'et_EE', 'fo_FO', 'fr_CA', 'ka_GE', 'el_GR', 'gu_IN', 'hi_IN', 'is_IS', 'id_ID', 'ga_IE', 'jv_ID', 'kn_IN', 'kk_KZ', 'lv_LV', 'lt_LT', 'mk_MK', 'mg_MG', 'ms_MY', 'mt_MT', 'mr_IN', 'mn_MN', 'ne_NP', 'pa_IN', 'sr_RS', 'so_SO', 'sw_KE', 'tl_PH', 'ta_IN', 'te_IN', 'ml_IN', 'uk_UA', 'uz_UZ', 'vi_VN', 'km_KH', 'tg_TJ', 'ar_AR', 'he_IL', 'ur_PK', 'fa_IR', 'ps_AF', 'my_MM', 'qz_MM', 'or_IN', 'si_LK', 'rw_RW', 'cb_IQ', 'ha_NG', 'ja_KS', 'br_FR', 'tz_MA', 'co_FR', 'as_IN', 'ff_NG', 'sc_IT', 'sz_PL'];

export default {
  MESSAGING_TYPE,
  SENDER_ACTIONS,
  NOTIFICATION_TYPE,
  ATTACHMENT_TYPE,
  ATTACHMENT_SOURCE,
  MAX_QUICK_REPLIES,
  QUICKREPLY_TYPE,
  TEMPLATE_TYPE,
  WEBVIEW_HEIGHT_RATIO,
  IMAGE_ASPECT_RATIO,
  TOP_ELEMENT_STYLE,
  MEDIA_TYPE,
  LOCALES,
  TAGS
};
