import { Resource, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Resource[]> {
  let counter = 0;
  return [
    {
      id: (counter++).toString(),
      name: "Core contract",
      description: "Starknet core contract on Ethereum",
      address:
        "https://etherscan.io/address/0xc662c410C0ECf747543f5bA90660f6ABeBD9C8c4",
    },
    {
      id: (counter++).toString(),
      name: "Verifier address (GpsStatementVerifier)",
      description: "Starknet Verifier address on Ethereum",
      address:
        "https://etherscan.io/address/0x47312450B3Ac8b5b8e247a6bB6d523e7605bDb60",
    },
    {
      id: (counter++).toString(),
      name: "UDC",
      description: "OpenZeppelin Universal Deployer Contract",
      address:
        "https://starkscan.co/contract/0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
    },
    {
      id: (counter++).toString(),
      name: "STRK",
      description: "Stark Token",
      address:
        "https://starkscan.co/contract/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
    },
    {
      id: (counter++).toString(),
      name: "vSTRK",
      description: "Starknet Voting Token",
      address:
        "https://starkscan.co/contract/0x0782f0ddca11d9950bc3220e35ac82cf868778edb67a5e58b39838544bc4cd0f",
    },
    {
      id: (counter++).toString(),
      name: "WBTC",
      description: "Wrapped BTC",
      address:
        "https://starkscan.co/contract/0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac",
    },
    {
      id: (counter++).toString(),
      name: "USDC",
      description: "USD Coin",
      address:
        "https://starkscan.co/contract/0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
    },
    {
      id: (counter++).toString(),
      name: "USDT",
      description: "Tether USD",
      address:
        "https://starkscan.co/contract/0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
    },
    {
      id: (counter++).toString(),
      name: "ETH",
      description: "Ether",
      address:
        "https://starkscan.co/contract/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    },
    {
      id: (counter++).toString(),
      name: "DAI",
      description: "Dai Stablecoin",
      address:
        "https://starkscan.co/contract/0x05574eb6b8789a91466f902c380d978e472db68170ff82a5b650b95a58ddf4ad",
    },
    {
      id: (counter++).toString(),
      name: "wstETH",
      description: "Wrapped liquid staked Ether 2.0",
      address:
        "https://starkscan.co/contract/0x42b8f0484674ca266ac5d08e4ac6a3fe65bd3129795def2dca5c34ecc5f96d2",
    },
    {
      id: (counter++).toString(),
      name: "rETH",
      description: "Rocket Poll Eth",
      address:
        "https://starkscan.co/contract/0x0319111a5037cbec2b3e638cc34a3474e2d2608299f3e62866e9cc683208c610",
    },
    {
      id: (counter++).toString(),
      name: "R",
      description: "R Stablecoin",
      address:
        "https://starkscan.co/contract/0x01fa2fb85f624600112040e1f3a848f53a37ed5a7385810063d5fe6887280333",
    },
    {
      id: (counter++).toString(),
      name: "FRAX",
      description: "Frax",
      address:
        "https://starkscan.co/contract/0x009c6b4fb13dfaa025c1383ed6190af8ed8cbb09d9588a3bb020feb152442406",
    },
    {
      id: (counter++).toString(),
      name: "UNI",
      description: "Uniswap",
      address:
        "https://starkscan.co/contract/0x049210ffc442172463f3177147c1aeaa36c51d152c1b0630f2364c300d4f48ee",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
