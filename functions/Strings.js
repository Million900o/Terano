module.exports.toChunks = function toChunks(ChunkBy) {
    if (!ChunkBy || isNaN(ChunkBy)) {
        throw new EvalError("No provided chunk char was provided or the provided parameter is not a number");
    }

    let ChunksNum = Math.ceil(this.length / parseInt(ChunkBy));
    let array = new Array(ChunksNum);
    for (var i = 0, o = 0; i < ChunksNum; ++i, o += parseInt(ChunkBy)) {
        array[i] = this.substr(o, parseInt(ChunkBy));
    }
    return array;
}