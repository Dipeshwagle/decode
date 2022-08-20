type KeyType = "link";

const mapping: {
  [key: string]: {
    titleKey: string;
    fields: {
      [key: string]: {
        type: KeyType;
        value: string;
      };
    };
  };
} = {
  "Fundraising Rounds - Companies": {
    titleKey: "Company Name (from Project)",
    fields: {
      Founder: {
        type: "link",
        value: "Crypto Companies - Founders",
      },
      Category: {
        type: "link",
        value: "Crypto Companies - Categories",
      },
      Investors: {
        type: "link",
        value: "Crypto Companies - Investors",
      },
      Categories: {
        type: "link",
        value: "Crypto Companies - Categories",
      },
      "Sub-categories": {
        type: "link",
        value: "Crypto Companies - Subcategorie",
      },
      Stages: {
        type: "link",
        value: "Fundraising Rounds - Stages",
      },
      Project: {
        type: "link",
        value: "Crypto Companies",
      },
    },
  },
  "Crypto Companies": {
    titleKey: "Company",
    fields: {
      Ecosystem: {
        type: "link",
        value: "Crypto Companies - Ecosystems",
      },
      Location: {
        type: "link",
        value: "Crypto Companies - Locations",
      },
      "Fundraising Rounds": {
        type: "link",
        value: "Fundraising Rounds - Companies",
      },
      Investors: {
        type: "link",
        value: "Crypto Companies - Investors",
      },
      Founder: {
        type: "link",
        value: "Crypto Companies - Founders",
      },
    },
  },
  "Crypto Companies - Founders": {
    titleKey: "Name",
    fields: {
      "Fundraising Rounds - Companies": {
        type: "link",
        value: "Fundraising Rounds - Companies",
      },
      "Crypto Companies": {
        type: "link",
        value: "Crypto Companies",
      },
      
    },
  },
  "Crypto Companies - Categories": {
    titleKey: "Categories",
    fields: {
      "Fundraising Rounds": {
        type: "link",
        value: "Fundraising Rounds - Companies",
      },
    },
  },
  "Crypto Companies - Subcategorie": {
    titleKey: "Name",
    fields: {
      "Fundraising Rounds": {
        type: "link",
        value: "Fundraising Rounds - Companies",
      },
    },
  },
  "Fundraising Rounds - Stages": {
    titleKey: "Name",
    fields: {
      "Fundraising Rounds - Companies": {
        type: "link",
        value: "Fundraising Rounds - Companies",
      },
    },
  },
  "Crypto Companies - Ecosystems": {
    titleKey: "Name",
    fields: {
      "Crypto Companies": {
        type: "link",
        value: "Crypto Companies",
      },
    },
  },
  "Crypto Companies - Locations": {
    titleKey: "Name",
    fields: {
      "Crypto Companies": {
        type: "link",
        value: "Crypto Companies",
      },
    },
  },
};

export default mapping;
