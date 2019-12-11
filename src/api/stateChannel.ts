import { Signature } from './types';

export interface StateChannelApi {

  login(): Promise<string>;

  sign({
        channelId,
        scriptHash,
        phvHash,
        message
    }: {
      channelId: string,
      scriptHash: string,
      phvHash: String,
      message: string
    }): Promise<Signature>;
}
