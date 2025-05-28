import IMask from 'imask';

export const PHONE_MASK = {
  mask     : '{+1} (000)-000-0000',
  lazy     : false,
  overwrite: true
};

export const DATE_MASK = {
  mask     : 'mm/dd/yyyy',
  pattern  : 'mm/dd/yyyy',
  lazy     : false,
  overwrite: true,
  blocks   : {
    yyyy: {
      mask: IMask.MaskedRange,
      from: 1900,
      to  : 2030
    },
    mm  : {
      mask: IMask.MaskedRange,
      from: 1,
      to  : 12
    },
    dd  : {
      mask: IMask.MaskedRange,
      from: 1,
      to  : 31
    }
  }
};

export const PIN_MASK = {
  mask     : '0000',
  lazy     : true,
  overwrite: true
};

export const ZIP_MASK = {
  mask: [
    {
      mask: '00000'
    },
    {
      mask: '00000{-}0000'
    }
  ],
  lazy: false
};

export const VERIFICATION_CODE_MASK = {
  mask     : '000000',
  lazy     : true,
  overwrite: true
};

export const USA_ZIPCODES_MASK = {
  mask: [
    {
      mask: '00000'
    },
    {
      mask: '00000-0000'
    }
  ],
  lazy: false
};

export const IVPN_PHYSICAL_CARD_MASK = {
  mask: [
    {
      mask: '0000 0000 0000 0000'
    },
    // Tried with a regex but didn't work so bruteforced it.
    {
      mask: '0000 0000 0000 0000 0'
    },
    {
      mask: '0000 0000 0000 0000 00'
    },
    {
      mask: '0000 0000 0000 0000 000'
    },
    {
      mask: '0000 0000 0000 0000 0000'
    },
    {
      mask: 'aa00 0000 000'
    },
    {
      mask: '{pending:}0000000'
    }
  ],
  lazy: false
};

export const IVPN_PHYSICAL_CARD_PLUS_SCANNED_TEXT_MASK = {
  mask: [
    {
      mask: '0000 0000 0000 0000'
    },
    // Tried with a regex but didn't work so bruteforced it.
    {
      mask: '0000 0000 0000 0000 0'
    },
    {
      mask: '0000 0000 0000 0000 00'
    },
    {
      mask: '0000 0000 0000 0000 000'
    },
    {
      mask: '0000 0000 0000 0000 0000'
    },
    {
      mask: 'aa00 0000 000'
    },
    {
      // %B564448000031498319?;564448000031498319=49120000000000000?
      // %B6394715005986694?;6394715005986694=49120000000000?
      mask     : '{%B}[00000000000000000000]{?;}[00000000000000000000]{=}[00000000000000000]{?}',
      overwrite: true
    }
  ]
};

export const CARD_RANGE_MASK = {
  mask: [
    {
      mask: '0000 0000 0000 000 [X]',
      lazy: false
    },
    // Tried with a regex but didn't work so bruteforced it.
    {
      mask: '0000 0000 0000 0000 [X]',
      lazy: false
    },
    {
      mask: '0000 0000 0000 0000 0 [X]',
      lazy: false
    },
    {
      mask: '0000 0000 0000 0000 00 [X]',
      lazy: false
    },
    {
      mask: '0000 0000 0000 0000 000 [X]',
      lazy: false
    }
  ]
};

export const BS_RGB_MASK = {
  mask     : '`00[0]{, }00[0]{, }00[0]',
  lazy     : false,
  overwrite: true
};

