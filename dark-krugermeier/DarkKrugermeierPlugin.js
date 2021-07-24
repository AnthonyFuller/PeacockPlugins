const FIREARMS_PISTOL_DARK_KRUGERMEIER = {
    Id: "FIREARMS_HERO_PISTOL_KRUGERMEIER_DARK",
    Guid: "820207d3-9b73-4ec6-82a1-b6509b570b5b",
    Type: "weapon",
    Subtype: "pistol",
    ImageId: "",
    RMTPrice: 99,
    GamePrice: 99,
    IsPurchasable: false,
    IsPublished: true,
    IsDroppable: false,
    Capabilities: [],
    Qualities: {},
    Properties: {
        Gameplay: {
            range: 0.4,
            damage: 0.3,
            clipsize: 0.7,
            rateoffire: 0.6,
        },
        Quality: 4,
        Rarity: "common",
        LoadoutSlot: "concealedweapon",
        RepositoryId: "b2d514ba-86d6-456a-be10-7592a30dcae1",
        UnlockOrder: 20,
    },
    Rarity: "common",
}

module.exports = function darkKrugermeierPlugin(pluginSystem) {
    const unlockables =
        pluginSystem.exposedLibraries.config.configs.allunlockables

    const logger = pluginSystem.exposedLibraries.logger
    logger.default(logger.LogLevel.INFO, "Started dark krugermeier plugin.")

    unlockables.push(FIREARMS_PISTOL_DARK_KRUGERMEIER)
}
