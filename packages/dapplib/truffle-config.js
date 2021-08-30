require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food struggle rescue pizza sniff grace office army giggle'; 
let testAccounts = [
"0x57c5afa46c1320b1e71a1fbb5093f47d7039cead44fb144aadacb68732e0864a",
"0x255b3a57f425a198ea9a1ee1ee149dc7c6e16b37bd750b933580070e16684ca0",
"0x229a389fb45af50459eb2082bb0a82a2435337a025652008cfa9e011ab44da05",
"0xdd7a1a9d6c90a6e378ffeeb334a00160414948529692f154a77fbcb0dc85aba8",
"0x12747959ef0e3f6b88c5026941be81fe11765447f5d946f64b8ee32969499a76",
"0x6688bd424ed4b8b2fd0bb7b97b77b9c0dc23dd247628791933afd0ecffeceb92",
"0x9e3c568a337da42dec73480e9383f4f34f11f904eac47fe73dc29d31407cda6a",
"0x69c6bc991689e7e6859fdcddce1786ce390bb9b15df193dae2dc1d198966390d",
"0x2d025c2aa3547b29cbdcbae0670386c4f54939d4a497ec289c2f6de82039dd5a",
"0x75d8385b0db00593ebe4d934e452bc70f6058fb45dc80756a352f1da1c93ec03"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


