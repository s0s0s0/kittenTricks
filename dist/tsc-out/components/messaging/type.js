export var Alignments;
(function (Alignments) {
    Alignments["ROW-LEFT"] = "row-left";
    Alignments["ROW-RIGHT"] = "row-right";
})(Alignments || (Alignments = {}));
const containerRow = {
    flexDirection: 'row',
    alignItems: 'center',
};
const placements = {
    [Alignments['ROW-LEFT']]: {
        style() {
            return Object.assign({}, containerRow, { justifyContent: 'flex-start' });
        },
    },
    [Alignments['ROW-RIGHT']]: {
        style() {
            return Object.assign({}, containerRow, { justifyContent: 'flex-end' });
        },
    },
};
export function getContentAlignment(value) {
    return placements[value];
}
export var ChatFileMessageAppearance;
(function (ChatFileMessageAppearance) {
    ChatFileMessageAppearance["full"] = "full";
    ChatFileMessageAppearance["preview"] = "preview";
})(ChatFileMessageAppearance || (ChatFileMessageAppearance = {}));
//# sourceMappingURL=type.js.map