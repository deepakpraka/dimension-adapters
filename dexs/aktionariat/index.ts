import * as sdk from "@defillama/sdk";
import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
    [CHAIN.ETHEREUM]: sdk.graph.modifyEndpoint('2ZoJCp4S7YP7gbYN2ndsYNjPeZBV1PMti7BBoPRRscNq'),
    [CHAIN.OPTIMISM]: sdk.graph.modifyEndpoint('3QfEXbPfP23o3AUzcmjTfRtUUd4bfrFj3cJ4jET57CTX'),
    [CHAIN.POLYGON]: sdk.graph.modifyEndpoint('7camBLZckE5TLKha372tqawpDs8Lkez6yYiri7PykRak'),
}, {
  factoriesName: "registries",
  totalVolume: "totalVolumeUSD",
  dayData: "aktionariatDayDatas",
  dailyVolume: "volumeUSD",
  dailyVolumeTimestampField: "date"
});

adapters.adapter.ethereum.start = 14830096;
adapters.adapter.optimism.start = 4198027;
adapters.adapter.polygon.start = 58116009;

export default adapters;