import { IAudioMetadata, IOptions } from 'music-metadata/lib/type';
import * as mm from 'music-metadata/lib/core';
export { IPicture, IAudioMetadata, IOptions, ITag, INativeTagDict, IChapter } from 'music-metadata/lib/type';
export { parseBuffer, parseFromTokenizer, orderTags, ratingToStars, IFileInfo, selectCover } from 'music-metadata/lib/core';
/**
 * Parse audio Stream
 * @param stream - ReadableStream
 * @param contentType - MIME-Type
 * @param options - Parsing options
 * @returns Metadata
 */
export declare const parseNodeStream: typeof mm.parseStream;
/**
 * Parse Web API ReadableStream: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
 * @param stream - ReadableStream (web stream according WTWG Streams Standard)
 * @param fileInfo FileInfo object or MIME-Type
 * @param options - Parsing options
 * @returns Metadata
 */
export declare function parseReadableStream(stream: ReadableStream, fileInfo?: mm.IFileInfo | string, options?: IOptions): Promise<IAudioMetadata>;
/**
 * Parse Web API File
 * @param blob - Blob to parse
 * @param options - Parsing options
 * @returns Metadata
 */
export declare function parseBlob(blob: Blob, options?: IOptions): Promise<IAudioMetadata>;
/**
 * Parse fetched file, using the Web Fetch API
 * @param audioTrackUrl - URL to download the audio track from
 * @param options - Parsing options
 * @returns Metadata
 */
export declare function fetchFromUrl(audioTrackUrl: string, options?: IOptions): Promise<IAudioMetadata>;
