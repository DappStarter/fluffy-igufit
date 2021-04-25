require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name regret oven proud harvest pave army genius'; 
let testAccounts = [
"0xed5b6f8df68738ca2de3e8b877ce817c02622e1dbdd31bd91601e0060c4a0b6b",
"0x249e7193e71cc36ac49bdd40a51a3d70627b7316609205e97d2ed27563094541",
"0x584ae9d6403b824566bdc194d452407a64196d6a9444e0d077399577adb90d6f",
"0x98426e6267ef4a8da6fddcce22daab94601cfb36b7b353e6e60776e1f54f9b8d",
"0x96e25181e0d6376c60801e8e382fd808aa261a6326ac0220aee8842cdfee4cec",
"0x40b3176ea36975da199c04176f516c6506d85fa74a346a7a6a1954a7d4b4198b",
"0x1ff7da8b221b83dc5baaa250143c86153475027c39f9501af4c213d6564b064f",
"0x09ad7d79574ee96531c28e9428411b244e2c85193b0c36c87d19e66550fe955d",
"0x606d118c335c34a80205cc70c9cd94711a2912a951b2e65815691f10711f1977",
"0x35e4dee3c0c327fdb048700fc8bfcdb45f740cd0563eac95c480285d1c75ed4a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
