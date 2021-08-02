/**
 * Elusive targets plugin - by JadedObsidian, maintained by rdil.
 *
 * @licence https://www.mozilla.org/en-US/MPL/2.0
 */

/* eslint-disable */

const THEREVOLUTIONARY = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "d84ad5f8-0312-4232-b65c-8cb2bdfff689",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "d339202b-5282-4bb9-9be6-d3335311be1e",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/colombia/elusive_highball.brick",
        ],
        GameChangers: [],
        GameChangerReferences: [],
        Entrances: ["37d5b96b-2c27-4d1b-a7e4-2fa290e6d2d6"],
    },
    Metadata: {
        Id: "01e38e22-b8d8-4266-af3b-f3330c41e6f2",
        Title: "UI_CONTRACT_HIGHBALL_TITLE",
        Description: "UI_CONTRACT_HIGHBALL_DESC",
        Location: "LOCATION_COLOMBIA",
        ScenePath: "assembly:/_pro/scenes/missions/colombia/scene_hippo.entity",
        BriefingVideo: "briefing_highball",
        DebriefingVideo: "debriefing_highball",
        TileImage: "images/contracts/elusive/S2_Highball/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        Entitlements: ["H2_LEGACY_STANDARD"],
        PublicId: "021110827047",
    },
    UserData: {},
}

const THEPOLITICIAN = {
    Data: {
        EnableSaving: true,
        Entrances: ["d08b7d6d-9b1f-4131-bb44-4ebd2cdb1cec"],
        Bricks: [],
        Objectives: [
            {
                Id: "8c9809a4-29d3-4225-853a-218cd0d5be3f",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "da70a09e-606a-4527-b9f1-bdaff831e5d4",
                    },
                },
            },
        ],
        UserData: {},
        GameChangers: [],
    },
    Metadata: {
        Title: "UI_CONTRACT_ADONIS_TITLE",
        Description: "UI_CONTRACT_ADONIS_DESC",
        Id: "44fd7474-d7be-4d3d-b944-6c1cf6ca09d1",
        Type: "mission",
        BriefingVideo: "briefing_adonis",
        DebriefingVideo: "debriefing_adonis",
        ScenePath: "assembly:/_pro/scenes/missions/sheep/scene_adonis.entity",
        TileImage: "images/contracts/elusive/047_adonis/Title.jpg",
        Location: "LOCATION_NEWZEALAND",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        PublicId: "020716821447",
    },
    UserData: {},
}

const THESTOWAWAY = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "0c66f7ef-91d3-4e9b-b1a0-3d26cb850f57",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "0808d791-d0ba-4c71-880f-a31c88ad69d9",
                    },
                },
            },
            {
                Id: "9f14eb28-cc91-44ba-93c4-7b90bae6b912",
                Category: "primary",
                ForceShowOnLoadingScreen: true,
                IsHidden: true,
                ObjectiveType: "custom",
                Image: "images/contracts/elusive/s2_skittlebomb/objective2.jpg",
                BriefingName: "$loc UI_CONTRACT_SKITTLEBOMB_OBJ_2_TITLE",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_SKITTLEBOMB_OBJ_2_TITLE",
                    iconType: 17,
                },
                BriefingText: "$loc UI_CONTRACT_SKITTLEBOMB_OBJ_2_DESC",
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["39dee301-8480-4d74-a100-9a797297bda7"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "e303a7f6-2f5e-4c2f-84df-f851c14583a5",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/scenes/missions/theark/elusive_skittlebomb.brick",
        ],
        GameChangers: ["abf09e23-299d-410c-a185-6188f687224b"],
        Entrances: [
            "42bfbe45-85c8-4555-b1fb-256b7006ee06",
            "9c35b39c-53ca-4d5c-8ec4-90d1fc5a4bb0",
            "5e30a7b9-7e06-464e-b2eb-1aa23635f500",
            "95af0d95-bc0d-402e-acb3-ea918a791300",
            "f6a11cec-cd25-4a4d-80cd-e9939cc081c1",
            "0df05e9f-78ef-4ce7-b627-b9d1ad55f607",
        ],
    },
    Metadata: {
        Id: "cbc86bed-51ce-4699-89d4-0ded8f200cbc",
        Title: "UI_CONTRACT_SKITTLEBOMB_TITLE",
        Description: "UI_CONTRACT_SKITTLEBOMB_DESC",
        Location: "LOCATION_NORTHSEA",
        ScenePath: "assembly:/_pro/scenes/missions/theark/scene_magpie.entity",
        BriefingVideo: "briefing_skittlebomb",
        DebriefingVideo: "debriefing_skittlebomb",
        TileImage: "images/contracts/elusive/s2_skittlebomb/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        Entitlements: ["H2_LEGACY_STANDARD"],
        PublicId: "021110827047",
    },
    UserData: {},
}

const THEFUGITIVE = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "5f1ddb3d-8606-479b-ae81-659a5b523f83",
                Primary: true,
                IsHidden: true,
                Category: "primary",
                ObjectiveType: "custom",
                DisplayAsKillObjective: true,
                Image: "images/actors/elusive_DirtyOctopus_face.jpg",
                BriefingName: "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE",
                BriefingText: "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE",
                LongBriefingText: "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE",
                },
                Type: "statemachine",
                Scope: "hit",
                Definition: {
                    Context: {
                        KilledActors: [],
                        Targets: [],
                    },
                    States: {
                        Start: {
                            TargetPicked: [
                                {
                                    Actions: {
                                        $pushunique: [
                                            "Targets",
                                            "$Value.RepositoryId",
                                        ],
                                    },
                                    Transition: "TargetPicked",
                                },
                            ],
                        },
                        TargetPicked: {
                            Kill: [
                                {
                                    Actions: {
                                        $pushunique: [
                                            "KilledActors",
                                            "$Value.RepositoryId",
                                        ],
                                    },
                                },
                                {
                                    Condition: {
                                        $all: {
                                            in: "$.Targets",
                                            "?": {
                                                $any: {
                                                    in: "$.KilledActors",
                                                    "?": {
                                                        $eq: ["$.#", "$.##"],
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Transition: "Success",
                                },
                            ],
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_dirtyoctopus.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "deace35f-ab6d-44c9-b1a6-98757e854f74",
        Title: "UI_CONTRACT_DIRTY_OCTOPUS_TITLE",
        Description: "UI_CONTRACT_DIRTY_OCTOPUS_DESC",
        BriefingVideo: "briefing_dirtyoctopus",
        DebriefingVideo: "debriefing_dirtyoctopus",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/Hokkaido/_Scene_SnowCrane.entity",
        TileImage: "images/contracts/elusive/028_DirtyOctopus/Title.jpg",
        Location: "LOCATION_HOKKAIDO",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "010041996247",
    },
    UserData: {},
}

const THEBLACKHAT = {
    Data: {
        Entrances: [
            "74062d4a-3386-44b8-83e0-1d0348e5976f",
            "67aec874-287f-4c82-9e01-3dbd7683faac",
            "3bdb62b5-15ef-4eb6-94b1-7f2e0cdf1d31",
            "aa4cdd0b-8fcf-4160-a049-c15a19c82af1",
            "c6765d3e-4031-4778-a5c5-a6d875131ea4",
            "943b8f1f-10c4-4dbf-a67e-25ed343290f5",
            "be610298-cbe8-47ce-9e90-951d2aae6f39",
            "04834714-406b-444e-b0d8-2f1054c1f8b5",
            "d76ae2ee-05ea-4f2b-a9c7-62efa6422628",
        ],
        EnableSaving: true,
        Objectives: [
            {
                Id: "bb44420f-6f72-4dcb-96d6-c0716bf34faf",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "1b21e6e6-beba-4f7e-8760-e9604a69c569",
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_scene_Kamikaze.brick"],
        GameChangers: [],
        GameChangerReferences: [],
    },
    Metadata: {
        Id: "2b928d67-c244-4601-bafb-7af664fb17bb",
        Title: "UI_CONTRACT_KAMIKAZE_TITLE",
        Description: "UI_CONTRACT_KAMIKAZE_DESC",
        BriefingVideo: "briefing_kamikaze",
        DebriefingVideo: "debriefing_kamikaze",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/039_Kamikaze/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002268191947",
    },
    UserData: {},
}

const THEGUNRUNNER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "905e7cd5-1dd9-4ce3-bec2-a0120b921308",
                Primary: true,
                FailedEvent: { EventName: "TargetEscaped" },
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "905e7cd5-1dd9-4ce3-bec2-a0120b921308",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_screwdriver.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "0d938ef9-05c7-4eb8-89cc-ae79b73c6992",
        Title: "UI_CONTRACT_SCREWDRIVER_TITLE",
        Description: "UI_CONTRACT_SCREWDRIVER_DESC",
        BriefingVideo: "briefing_screwdriver",
        DebriefingVideo: "debriefing_screwdriver",
        Location: "LOCATION_MARRAKECH",
        ScenePath:
            "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity",
        TileImage: "images/contracts/elusive/010_Screwdriver/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "006376609247",
    },
    UserData: {},
}

const THESERIALKILLER = {
    Data: {
        EnableSaving: true,
        Entrances: [
            "9034bf0a-6efa-4dec-bb99-5b342804af86",
            "e8d12fac-221f-4b1d-9cad-fec2bd161c04",
            "e0dcccd6-7e08-48ba-a1f0-aec0f83fedb5",
            "896cf183-d974-4d45-a819-2f04466d95e2",
            "5877bd62-5609-4211-9fc5-ee7b5ce5984a",
        ],
        Objectives: [
            {
                Id: "7eabd1c9-bf88-4d96-86f1-ea089492414c",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "d21efe38-c577-49bf-95f0-e72891f004bb",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/skunk/elusive_alabamaslammer.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "332e588b-80a3-4cb0-abc6-dc8de3d89e83",
        Type: "mission",
        Title: "UI_CONTRACT_ALABAMASLAMMER_TITLE",
        Description: "UI_CONTRACT_ALABAMASLAMMER_DESC",
        BriefingVideo: "briefing_alabamaslammer",
        DebriefingVideo: "debriefing_alabamaslammer",
        ScenePath: "assembly:/_pro/scenes/missions/skunk/scene_skunk.entity",
        TileImage: "images/contracts/elusive/S2_AlabamaSlammer/Title.jpg",
        Location: "LOCATION_NORTHAMERICA",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        PublicId: "022497523647",
    },
    UserData: {},
}

const THEWARLORD = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "a0dc6d26-1114-4e4f-8bef-096e3924c545",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "3a26a487-5f3b-440a-a55d-13a136eb1bea",
                    },
                },
            },
            {
                Id: "e8da2281-192e-45b4-886e-36d713314145",
                IsHidden: true,
                Category: "primary",
                ObjectiveType: "custom",
                ForceShowOnLoadingScreen: true,
                Image: "images/unlockables/item_perspective_55d34557-5b46-422f-84ce-7bb13cfcef96_0.jpg",
                BriefingName: "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE",
                LongBriefingText: "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_bloodymary.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "87f8293a-29cd-4cb1-ade7-dd6bb056d38e",
        Title: "UI_CONTRACT_BLOODYMARY_TITLE",
        Description: "UI_CONTRACT_BLOODYMARY_DESC",
        ScenePath: "assembly:/_PRO/Scenes/Missions/bangkok/_Scene_Tiger.entity",
        TileImage: "images/contracts/elusive/009_BloodyMary/Title.jpg",
        Location: "LOCATION_BANGKOK",
        BriefingVideo: "briefing_bloodymary",
        DebriefingVideo: "debriefing_bloodymary",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "008817603347",
    },
    UserData: {},
}

const THEPRINCE = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "678f8f2e-92e1-41fc-b212-efecf9aa7b1b",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
        ],
        Entrances: [
            "1021798e-cec1-4b43-ba33-69b7d53da867",
            "c27f76ca-ed71-4b2d-9b9d-693875df830c",
            "a72bd197-f996-4e3b-b494-11f62296a2b3",
            "4970aae5-e4c1-4d5c-a66a-0fc06616211b",
            "249659f3-8989-4ffc-b727-4902e954605f",
            "495222ec-e8c9-416a-a41f-4bdfc3e6b80e",
            "8fd339e1-ea06-4aee-bd65-0c89b34e4e7e",
            "c113315d-ffcc-4878-9e70-bb35aadf0211",
            "c200b5c6-2c14-4602-b22d-3a67b9fb3e3b",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "0fd17346-bcb4-4bcc-acc3-5e1b6b184ef4",
        Title: "UI_CONTRACT_SAZERAC_TITLE",
        Description: "UI_CONTRACT_SAZERAC_DESC",
        BriefingVideo: "briefing_sazerac",
        DebriefingVideo: "debriefing_sazerac",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        Location: "LOCATION_COASTALTOWN",
        TileImage: "images/contracts/elusive/002_Sazerac/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003347282447",
    },
    UserData: {},
}

const THEDECIEVERS = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "c2795d2e-9626-4acc-a28a-2c4791de4dc8",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "a5b1f605-7767-4db4-a24b-a9191a10f12d",
                    },
                },
            },
            {
                Id: "46ff3c7c-4894-434f-a051-a947fe9131b2",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "2da5acff-0025-4814-831f-30156a4ee38f",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "8462b2e5-4d34-4300-896f-fe1dc98fa877",
        Title: "UI_CONTRACT_CORPSEREVIVER_TITLE",
        Description: "UI_CONTRACT_CORPSEREVIVER_DESC",
        BriefingVideo: "briefing_corpsereviver",
        DebriefingVideo: "debriefing_corpsereviver",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        TileImage: "images/contracts/elusive/048_CorpseReviver/Title.jpg",
        Location: "LOCATION_COASTALTOWN",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003183867047",
    },
    UserData: {},
}

const THEBADBOY = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Primary: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "ab3fe438-acd0-49a4-a0f4-690c86a10324",
                    },
                },
                Id: "85f63c02-f1c1-4d41-b1d0-a3ef765d2850",
                IsHidden: true,
            },
        ],
        Stashpoints: ["ea156a43-2020-4fee-b726-a5d01c2b0cc2"],
        Entrances: ["da717656-934e-4783-8c36-65bf486cfdfa"],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Mission_Caipirinha.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "b555d6a4-8b4d-4e1e-b6bd-ebd135ad1e01",
        IsPublished: true,
        Title: "UI_CONTRACT_CAIPIRINHA_TITLE",
        Description: "UI_CONTRACT_CAIPIRINHA_DESC",
        BriefingVideo: "briefing_caipirinha",
        DebriefingVideo: "debriefing_caipirinha",
        Location: "LOCATION_COASTALTOWN_MOVIESET",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_Scene_Copperhead.entity",
        TileImage: "images/contracts/elusive/005_Caipirinha/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "005557012747",
    },
    UserData: {},
}

const THEAPPRAISER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                _comment: "----- Eliminate Miranda Jamison -----",
                Id: "f9f212b8-71da-4489-98cf-cb242f36a9b9",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "4c7c489d-3992-41ad-b2af-df3b3c431b53",
                    },
                },
            },
            {
                _comment: "----- Retrieve the Logbook -----",
                Id: "8d2e7efa-e47d-4a5e-8e0d-4d768bfb6d38",
                Category: "primary",
                IsHidden: true,
                ObjectiveType: "custom",
                ForceShowOnLoadingScreen: true,
                Image: "images/contracts/elusive/S2_GoldenDoublet/Objective1.jpg",
                BriefingName: "$loc UI_CONTRACT_GOLDENDOUBLET_OBJ_1_TITLE",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_GOLDENDOUBLET_OBJ_1_TITLE",
                    iconType: 17,
                },
                BriefingText: "$loc UI_CONTRACT_GOLDENDOUBLET_OBJ_1_DESC",
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["264bb993-399a-4a60-9911-7c31cee0a2aa"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "a2b90ea0-a4b9-4ce6-b5e5-2b36b12d5970",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/scenes/missions/theark/elusive_goldendoublet.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "263eca3d-d25d-40ce-ba0a-48a221cd0b9e",
        Title: "UI_CONTRACT_GOLDENDOUBLET_TITLE",
        Description: "UI_CONTRACT_GOLDENDOUBLET_DESC",
        BriefingVideo: "briefing_goldendoublet",
        DebriefingVideo: "debriefing_goldendoublet",
        ScenePath: "assembly:/_pro/scenes/missions/theark/scene_magpie.entity",
        TileImage: "images/contracts/elusive/S2_GoldenDoublet/Title.jpg",
        Location: "LOCATION_NORTHSEA",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "021807391047",
    },
    UserData: {},
}

const THEPHARMACIST = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "37677b78-a370-43f4-bf7b-caefa67674d6",
                Primary: true,
                FailedEvent: {
                    EventName: "TargetEscaped",
                },
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "124c40d5-b342-4288-b202-57e80148e0d7",
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_scene_kirroyal.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "a9d93d2a-c541-49ab-8ba1-9e345cf7e806",
        Title: "UI_CONTRACT_KIRROYAL_TITLE",
        Description: "UI_CONTRACT_KIRROYAL_DESC",
        BriefingVideo: "briefing_kirroyal",
        DebriefingVideo: "debriefing_kirroyal",
        Location: "LOCATION_PARIS",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/021_KirRoyal/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002700060947",
    },
    UserData: {},
}

const THESENSATION = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "bb44420f-6f72-4dcb-96d6-c0716bf34faf",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "e30acbd5-cb3b-4691-a919-d1cf0ccf7fc4",
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_Scene_Shandy.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "13680605-83ed-4b8c-a44d-30cc5b4fb17a",
        Title: "UI_CONTRACT_SHANDY_TITLE",
        Description: "UI_CONTRACT_SHANDY_DESC",
        BriefingVideo: "briefing_shandy",
        DebriefingVideo: "debriefing_shandy",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/029_Shandy/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002463348847",
    },
    UserData: {},
}

const THESURGEONS = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Type: "statemachine",
                IsHidden: true,
                Id: "a9951cdb-0ce6-4ab9-b579-65298839d5a2",
                BriefingText: {
                    $loc: {
                        key: "UI_CONTRACT_GENERAL_OBJ_KILL",
                        data: "$($repository f4eb50bc-1a58-4487-a568-de5ffe19b7ff).Name",
                    },
                },
                HUDTemplate: {
                    display: {
                        $loc: {
                            key: "UI_CONTRACT_GENERAL_OBJ_KILL",
                            data: "$($repository f4eb50bc-1a58-4487-a568-de5ffe19b7ff).Name",
                        },
                    },
                },
                Category: "primary",
                Definition: {
                    Scope: "Hit",
                    Context: {
                        Targets: ["f4eb50bc-1a58-4487-a568-de5ffe19b7ff"],
                    },
                    States: {
                        Start: {
                            Kill: [
                                {
                                    Condition: {
                                        $eq: [
                                            "$Value.RepositoryId",
                                            "f4eb50bc-1a58-4487-a568-de5ffe19b7ff",
                                        ],
                                    },
                                    Transition: "Success",
                                },
                            ],
                        },
                    },
                },
                TargetConditions: [
                    {
                        Type: "weapon",
                        RepositoryId: "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                        HardCondition: false,
                        ObjectiveId: "9286bce1-af2c-4f95-950b-dbbbe7f72e7e",
                    },
                ],
            },
            {
                Type: "statemachine",
                Id: "9286bce1-af2c-4f95-950b-dbbbe7f72e7e",
                IsHidden: true,
                Category: "secondary",
                Definition: {
                    Scope: "Hit",
                    Context: {
                        Targets: ["f4eb50bc-1a58-4487-a568-de5ffe19b7ff"],
                    },
                    States: {
                        Start: {
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "f4eb50bc-1a58-4487-a568-de5ffe19b7ff",
                                                ],
                                            },
                                            {
                                                $eq: [
                                                    "$Value.KillItemRepositoryId",
                                                    "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Success",
                                },
                                {
                                    Condition: {
                                        $eq: [
                                            "$Value.RepositoryId",
                                            "f4eb50bc-1a58-4487-a568-de5ffe19b7ff",
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
            {
                Type: "statemachine",
                Id: "e9c6a29c-9690-4f7b-b674-411118d1cb04",
                IsHidden: true,
                BriefingText: {
                    $loc: {
                        key: "UI_CONTRACT_GENERAL_OBJ_KILL",
                        data: "$($repository 88836cf0-852e-4244-9aa3-90174467b5b1).Name",
                    },
                },
                HUDTemplate: {
                    display: {
                        $loc: {
                            key: "UI_CONTRACT_GENERAL_OBJ_KILL",
                            data: "$($repository 88836cf0-852e-4244-9aa3-90174467b5b1).Name",
                        },
                    },
                },
                Category: "primary",
                Definition: {
                    Scope: "Hit",
                    Context: {
                        Targets: ["88836cf0-852e-4244-9aa3-90174467b5b1"],
                    },
                    States: {
                        Start: {
                            Kill: [
                                {
                                    Condition: {
                                        $eq: [
                                            "$Value.RepositoryId",
                                            "88836cf0-852e-4244-9aa3-90174467b5b1",
                                        ],
                                    },
                                    Transition: "Success",
                                },
                            ],
                        },
                    },
                },
                TargetConditions: [
                    {
                        Type: "weapon",
                        RepositoryId: "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                        HardCondition: false,
                        ObjectiveId: "b2d7caf1-f0bc-493b-a183-920275b7c15e",
                    },
                ],
            },
            {
                Type: "statemachine",
                Id: "b2d7caf1-f0bc-493b-a183-920275b7c15e",
                IsHidden: true,
                Category: "secondary",
                Definition: {
                    Scope: "Hit",
                    Context: {
                        Targets: ["88836cf0-852e-4244-9aa3-90174467b5b1"],
                    },
                    States: {
                        Start: {
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "88836cf0-852e-4244-9aa3-90174467b5b1",
                                                ],
                                            },
                                            {
                                                $eq: [
                                                    "$Value.KillItemRepositoryId",
                                                    "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Success",
                                },
                                {
                                    Condition: {
                                        $eq: [
                                            "$Value.RepositoryId",
                                            "88836cf0-852e-4244-9aa3-90174467b5b1",
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
        ],
        Entrances: [
            "0e7dd303-c9bb-42cc-aca0-70499931d098",
            "2fc483c8-500c-4475-ba5d-e2cdd6ccc64c",
            "74b1ad25-06cd-41a2-9cf5-9dd5dac7345d",
            "85ef518f-0e94-4e5e-9fd2-66fb84d2d0bb",
            "a786fc74-b379-41f4-a4ac-ce970ee88b2c",
            "bdc80464-31dd-440d-ad79-2767b923a0a4",
            "df752dfa-623d-4750-83a6-8b4aba1d8e08",
            "fedf6cd3-d076-4037-b7d8-1449726b4c0a",
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_moscowmule.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "1c0377f3-6e32-4563-8baf-9677cdb3bb60",
        Title: "UI_CONTRACT_MOSCOWMULE_TITLE",
        Description: "UI_CONTRACT_MOSCOWMULE_DESC",
        BriefingVideo: "briefing_moscowmule",
        DebriefingVideo: "debriefing_moscowmule",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/Hokkaido/_Scene_SnowCrane.entity",
        TileImage: "images/contracts/elusive/017_MoscowMule/Title.jpg",
        Location: "LOCATION_HOKKAIDO",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "010834537047",
    },
    UserData: {},
}

const THEBROKER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "98ddb955-0ce2-4f37-9c5a-32eb986b9e0b",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "b1db6854-b82b-4bb4-8e73-a9c138a283d2",
                    },
                },
            },
            {
                Id: "1495cf66-c9a8-481e-92da-9990c4e2630f",
                IsHidden: true,
                Category: "primary",
                ObjectiveType: "custom",
                Image: "images/unlockables/item_perspective_d12fc231-020b-4673-a7b8-3789ed9fee93_0.jpg",
                BriefingName: "$loc UI_CONTRACT_MARGARITA_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_MARGARITA_OBJ_2_DESC",
                LongBriefingText: "$loc UI_CONTRACT_MARGARITA_OBJ_2_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_MARGARITA_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["d12fc231-020b-4673-a7b8-3789ed9fee93"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "d12fc231-020b-4673-a7b8-3789ed9fee93",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Paris/_Scene_Margarita_01.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "158b600a-6448-45d3-907f-77351b9656ee",
        Title: "UI_CONTRACT_MARGARITA_TITLE",
        Description: "UI_CONTRACT_MARGARITA_DESC",
        BriefingVideo: "briefing_margarita",
        DebriefingVideo: "debriefing_margarita",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/008_Margarita/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002469618747",
    },
    UserData: {},
}

const THEEXDICTATOR = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "fb63a347-6f03-481a-9a88-5a0162c5f741",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "7387e648-ad6b-408d-a0ee-3b3943767e78",
                    },
                },
            },
            {
                Id: "d1311911-9529-4ec3-a0de-52885c4f4d7a",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "978ad630-8d31-4416-8976-8ed1009a4dbd",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_brassmonkey.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "b0bed170-8652-4188-8b9a-92caf9f97e5b",
        Title: "UI_CONTRACT_BRASSMONKEY_TITLE",
        Description: "UI_CONTRACT_BRASSMONKEY_DESC",
        ScenePath: "assembly:/_PRO/Scenes/Missions/bangkok/_Scene_Tiger.entity",
        TileImage: "images/contracts/elusive/026_BrassMonkey/Title.jpg",
        Location: "LOCATION_BANGKOK",
        BriefingVideo: "briefing_brassmonkey",
        DebriefingVideo: "debriefing_brassmonkey",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "008733765547",
    },
    UserData: {},
}

const THETWIN = {
    Data: {
        EnableSaving: true,
        EnableExits: {
            $eq: ["$e24e8b07-8ac7-4ec3-acd5-7b671308ce2f", "Completed"],
        },
        Objectives: [
            {
                Id: "e24e8b07-8ac7-4ec3-acd5-7b671308ce2f",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "97b05a61-84d6-4b22-8dcc-3658986e1758",
                    },
                },
            },
            {
                Id: "29122337-1643-48d2-a76f-d7c738378cb6",
                Category: "primary",
                OnActive: {
                    IfCompleted: {
                        Visible: false,
                    },
                },
                IsHidden: true,
                BriefingText:
                    "$loc UI_CONTRACT_PISCO_SOUR_FAIL_GONZALES_HARMED",
                Type: "statemachine",
                ExcludeFromScoring: true,
                Definition: {
                    Scope: "hit",
                    Context: {
                        KilledActors: [],
                        Targets: ["168c6da4-c583-47f4-9435-a42d9ea22546"],
                    },
                    States: {
                        Start: {
                            Pacify: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "168c6da4-c583-47f4-9435-a42d9ea22546",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "168c6da4-c583-47f4-9435-a42d9ea22546",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_piscosour.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "e87217e3-4809-4855-80d5-74bed66be58d",
        Title: "UI_CONTRACT_PISCO_SOUR_TITLE",
        Description: "UI_CONTRACT_PISCO_SOUR_DESC",
        BriefingVideo: "briefing_piscosour",
        DebriefingVideo: "debriefing_piscosour",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        Location: "LOCATION_COASTALTOWN",
        TileImage: "images/contracts/elusive/013_PiscoSour/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003292234547",
    },
    UserData: {},
}

const THEPAPARAZZO = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "f01327ae-f9c7-4a73-8203-c8d0ee02b580",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "fc036cf1-7c6c-4418-b821-593628b67826",
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_scene_Mojito.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "0fea5e55-9aec-41ef-9e5b-4e5e5f536f82",
        Title: "UI_CONTRACT_MOJITO_TITLE",
        Description: "UI_CONTRACT_MOJITO_DESC",
        BriefingVideo: "briefing_mojito",
        DebriefingVideo: "debriefing_mojito",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/015_Mojito/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002134763547",
    },
    UserData: {},
}

const THEFIXER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "905e7cd5-1dd9-4ce3-bec2-a0120b921308",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "38c1700e-0247-4c09-8985-d98573a39f24",
                    },
                },
            },
            {
                Id: "907e5a9e-8751-4887-8ed3-e8434131313a",
                IsHidden: true,
                ObjectiveType: "custom",
                Image: "images/contracts/elusive/019_Cosmopolitan/Contract_Elusive_Cosmopolitan_Diamond_ObjectiveTile.jpg",
                BriefingName: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_2_BRIEF",
                LongBriefingText: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_2_DESC",
                Category: "primary",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "87d60de1-c050-48a1-ba43-9d2dbc052de0",
                                    ],
                                },
                                Transition: "Success",
                            },
                            DiamondsSecured: {
                                Transition: "Failure",
                            },
                            MeetingNeverHappened: {
                                Transition: "Failure",
                            },
                            DiamondsNeverPickedup: {
                                Transition: "Failure",
                            },
                        },
                    },
                },
            },
            {
                Id: "1495cf66-c9a8-481e-92da-9990c4e2630f",
                IsHidden: true,
                ObjectiveType: "custom",
                Image: "images/unlockables/item_perspective_87d60de1-c050-48a1-ba43-9d2dbc052de0_0.jpg",
                BriefingName: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_3_TITLE",
                BriefingText: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_3_BRIEF",
                LongBriefingText: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_3_DESC",
                Category: "primary",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_COSMOPOLITAN_OBJ_3_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["87d60de1-c050-48a1-ba43-9d2dbc052de0"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "87d60de1-c050-48a1-ba43-9d2dbc052de0",
                                    ],
                                },
                                Transition: "Success",
                            },
                            DiamondsSecured: {
                                Transition: "Failure",
                            },
                            MeetingNeverHappened: {
                                Transition: "Failure",
                            },
                            DiamondsNeverPickedup: {
                                Transition: "Failure",
                            },
                            CourierExitedWithDiamonds: {
                                Transition: "Failure",
                            },
                            CourierExitedNoDiamonds: {
                                Transition: "Failure",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_cosmopolitan.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "ad549098-eb3d-4132-8ef8-fe77c6afbbaa",
        Title: "UI_CONTRACT_COSMOPOLITAN_TITLE",
        Description: "UI_CONTRACT_COSMOPOLITAN_DESC",
        BriefingVideo: "briefing_cosmopolitan",
        DebriefingVideo: "debriefing_cosmopolitan",
        Location: "LOCATION_MARRAKECH",
        ScenePath:
            "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity",
        TileImage: "images/contracts/elusive/019_Cosmopolitan/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "006883085247",
    },
    UserData: {},
}

const THEBLACKMAILER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "1cccf663-a835-43ec-9515-5db94b52699f",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "2c11757e-905e-44e7-8115-81e6a5a72ee2",
                    },
                },
            },
            {
                Id: "c6c864fe-287c-4345-8a04-03682a65498f",
                IsHidden: true,
                Category: "primary",
                ObjectiveType: "custom",
                Image: "images/unlockables/item_perspective_55d34557-5b46-422f-84ce-7bb13cfcef96_0.jpg",
                BriefingName: "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_LUMUMBA_OBJ_2_DESC",
                LongBriefingText: "$loc UI_CONTRACT_LUMUMBA_OBJ_2_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_scene_Lumumba.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "5dc115d3-e5d4-4023-a11a-27c6f7194bea",
        Title: "UI_CONTRACT_LUMUMBA_TITLE",
        Description: "UI_CONTRACT_LUMUMBA_DESC",
        BriefingVideo: "briefing_lumumba",
        DebriefingVideo: "debriefing_lumumba",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/031_Lumumba/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002872008847",
    },
    UserData: {},
}

const THECHEF = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "71cdca0a-7c2b-413c-a766-25d51ee8a08e",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "7635712b-ebe1-40a4-a947-452fa6820cfc",
                    },
                },
            },
        ],
        Bricks: ["assembly:/_PRO/Scenes/Missions/Paris/_scene_Sakini.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "92a87b10-a230-4986-bb35-06f16e84b11f",
        Title: "UI_CONTRACT_SAKINI_TITLE",
        Description: "UI_CONTRACT_SAKINI_DESC",
        BriefingVideo: "briefing_sakini",
        DebriefingVideo: "debriefing_sakini",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/030_Sakini/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002167169847",
    },
    UserData: {},
}

const THECHAMELEON = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "3c074d6f-3c97-4891-9baa-4e44567693d7",
                Category: "primary",
                ObjectiveType: "customkill",
                IsHidden: true,
                BriefingName: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_1_TITLE",
                BriefingText: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_1_TITLE",
                LongBriefingText: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_1_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_1_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        KilledActors: [],
                        Targets: ["441209db-35ca-46e8-bb99-b9c3f8e8783c"],
                    },
                    States: {
                        Start: {
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "441209db-35ca-46e8-bb99-b9c3f8e8783c",
                                                ],
                                            },
                                            {
                                                $eq: ["$Value.Accident", true],
                                            },
                                            {
                                                $not: {
                                                    $eq: [
                                                        "$Value.KillClass",
                                                        "explosion",
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    Transition: "Success",
                                },
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "441209db-35ca-46e8-bb99-b9c3f8e8783c",
                                                ],
                                            },
                                            {
                                                $eq: [
                                                    "$Value.KillClass",
                                                    "poison",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Success",
                                },
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "441209db-35ca-46e8-bb99-b9c3f8e8783c",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
            {
                Id: "f94dcce7-2d6e-4f1f-a095-7b93b5e3a5ea",
                IsHidden: true,
                ObjectiveType: "custom",
                ForceShowOnLoadingScreen: true,
                Image: "images/contracts/elusive/027_Bushwacker/Objective1.jpg",
                BriefingName: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_2_DESC",
                LongBriefingText: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_2_DESC",
                Category: "primary",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_BUSHWHACKER_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    States: {
                        Start: {
                            UncoveredEvidence: {
                                Transition: "Success",
                            },
                            LaptopDestroyed: {
                                Transition: "Failure",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
        ],
        Entrances: [
            "e5c0d1a4-72b0-4cc0-857d-8bb155ea09f4",
            "6c943798-8ca7-42cc-861a-becdb32017da",
            "bd0cc571-e4a3-41f1-9b9b-608cdecc09c1",
            "f8ff0b17-b9f5-41ce-b7b1-db8bf6c47f4a",
            "370b4106-96f2-4a04-9bc6-029b86b301aa",
            "53ce9bb6-ef1c-4f17-8951-5b501fb941d4",
            "1d3a5b4a-5573-4e2d-8a98-d1c881cbd13e",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "550c4d75-ca87-4be7-a18e-caf30e6c8136",
        Title: "UI_CONTRACT_BUSHWHACKER_TITLE",
        Description: "UI_CONTRACT_BUSHWHACKER_DESC",
        BriefingVideo: "briefing_bushwacker",
        DebriefingVideo: "debriefing_bushwacker",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bull.entity",
        TileImage: "images/contracts/elusive/027_Bushwacker/Title.jpg",
        Location: "LOCATION_COLORADO",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "009556361447",
    },
    UserData: {},
}

const THEANGELOFDEATH = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "9fc35b39-82ab-4b5b-a3f9-8356e54445f3",
                Category: "primary",
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "50cea951-bb99-431d-aa22-9a31afcaec59",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_hottoddy.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "c3c7126e-32cd-4502-b5ce-90b5ae436806",
        Title: "UI_CONTRACT_HOTTODDY_TITLE",
        Description: "UI_CONTRACT_HOTTODDY_DESC",
        BriefingVideo: "briefing_hottoddy",
        DebriefingVideo: "debriefing_hottoddy",
        Location: "LOCATION_MARRAKECH",
        ScenePath:
            "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity",
        TileImage: "images/contracts/elusive/037_HotToddy/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "006406935647",
    },
    UserData: {},
}

const THEENTERTAINER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Primary: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "e63259c4-1a82-4299-9633-6ac54991e1e9",
                    },
                },
                Id: "85f63c02-f1c1-4d41-b1d0-a3ef765d2850",
                IsHidden: true,
            },
            {
                Id: "f574d4f6-fcb5-48c3-b3c9-15595069080b",
                IsHidden: true,
                Category: "primary",
                ObjectiveType: "custom",
                Image: "images/unlockables/item_perspective_74a4f6ee-b465-437c-bef9-3a67c9932853_0.jpg",
                BriefingName: "$loc UI_CONTRACT_MAITAI_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_MAITAI_OBJ_2_TITLE",
                LongBriefingText: "$loc UI_CONTRACT_MAITAI_OBJ_2_DESC",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_MAITAI_OBJ_2_TITLE",
                },
                Type: "statemachine",
                Definition: {
                    Context: {
                        Targets: ["f8b7e382-6893-48b5-b34e-aec668d20564"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "f8b7e382-6893-48b5-b34e-aec668d20564",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_maitai.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "2e2c3f33-92ad-412f-a351-b7267697ff70",
        Title: "UI_CONTRACT_MAI_TAI_TITLE",
        Description: "UI_CONTRACT_MAI_TAI_DESC",
        BriefingVideo: "briefing_maitai",
        DebriefingVideo: "debriefing_maitai",
        Location: "LOCATION_MARRAKECH_NIGHT",
        ScenePath:
            "assembly:/_pro/scenes/missions/marrakesh/_scene_python.entity",
        TileImage: "images/contracts/elusive/014_MaiTai/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "007884903147",
    },
    UserData: {},
}

const THEBOOKKEEPER = {
    Data: {
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick",
        ],
        EnableSaving: true,
        Entrances: [
            "e5c0d1a4-72b0-4cc0-857d-8bb155ea09f4",
            "6c943798-8ca7-42cc-861a-becdb32017da",
            "bd0cc571-e4a3-41f1-9b9b-608cdecc09c1",
            "f8ff0b17-b9f5-41ce-b7b1-db8bf6c47f4a",
            "370b4106-96f2-4a04-9bc6-029b86b301aa",
            "53ce9bb6-ef1c-4f17-8951-5b501fb941d4",
            "0cd2b917-eb26-4f19-90c2-a5e16eb18cef",
        ],
        GameChangers: [],
        Objectives: [
            {
                Id: "0a87490c-076c-4d08-ba73-37c70600c02d",
                IsHidden: true,
                Primary: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "229d24be-d95a-4c73-a1be-afac4a05a5e3",
                    },
                },
            },
            {
                BriefingName: "$loc UI_CONTRACT_FLIRTINI_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_FLIRTINI_OBJ_2_TITLE",
                Category: "primary",
                Definition: {
                    Context: {
                        Targets: ["92a71bd8-471e-49c9-b698-16771121ac05"],
                    },
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "92a71bd8-471e-49c9-b698-16771121ac05",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_FLIRTINI_OBJ_2_TITLE",
                },
                Id: "6f25f505-d95c-49d5-8fbd-430a8178eaa6",
                Image: "images/unlockables/item_perspective_74a4f6ee-b465-437c-bef9-3a67c9932853_0.jpg",
                IsHidden: true,
                LongBriefingText: "$loc UI_CONTRACT_FLIRTINI_OBJ_2_DESC",
                ObjectiveType: "custom",
                Type: "statemachine",
            },
            {
                Category: "condition",
                Definition: {
                    Context: {},
                    Scope: "session",
                    States: {
                        Start: {
                            TargetEscaped: {
                                Transition: "Success",
                            },
                        },
                    },
                },
                ExcludeFromScoring: true,
                Id: "d76898ad-1279-45e0-a83f-3821ab4507d8",
                OnActive: {
                    IfInProgress: {
                        Visible: false,
                    },
                },
                Type: "statemachine",
            },
            {
                Activation: {
                    $eq: ["$d76898ad-1279-45e0-a83f-3821ab4507d8", "Completed"],
                },
                BriefingText: "$loc UI_CONTRACT_FLIRTINI_FAIL_TARGET_ESCAPED",
                Category: "primary",
                Definition: {
                    Context: {},
                    States: {
                        EscapeCountdownStart: {
                            $timer: {
                                Condition: {
                                    $after: 30,
                                },
                                Transition: "Failure",
                            },
                            CarDestroyed: {
                                Transition: "Success",
                            },
                            Kill: [
                                {
                                    Condition: {
                                        $eq: [
                                            "$Value.RepositoryId",
                                            "229d24be-d95a-4c73-a1be-afac4a05a5e3",
                                        ],
                                    },
                                    Transition: "Success",
                                },
                            ],
                        },
                        Start: {
                            TargetEscaped: {
                                Transition: "EscapeCountdownStart",
                            },
                        },
                    },
                },
                IgnoreIfInactive: true,
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_FLIRTINI_OBJ_3",
                },
                Id: "980a8b37-21f1-466f-a220-d2083df88ebb",
                Scope: "session",
                Type: "statemachine",
            },
        ],
    },
    Metadata: {
        BriefingVideo: "briefing_flirtini",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        DebriefingVideo: "debriefing_flirtini",
        Description: "UI_CONTRACT_FLIRTINI_DESC",
        Id: "655c5a57-69d1-48b6-a14b-2ae396c16174",
        Location: "LOCATION_COLORADO",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bull.entity",
        TileImage: "images/contracts/elusive/042_Flitini/Title.jpg",
        Title: "UI_CONTRACT_FLIRTINI_TITLE",
        Type: "mission",
        PublicId: "009407438847",
    },
    UserData: {},
}

const THEFORGER = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "7571d18d-b1f7-4589-911f-0efa31d73d29",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "46b78498-b470-4aad-b72b-d90f3126a7f6",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Paris/_Scene_TequilaSunrise_01.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "8813e0a4-08ac-494f-a847-687a2da3582f",
        Title: "UI_CONTRACT_TEQUILA_SUNRISE_TITLE",
        Description: "UI_CONTRACT_TEQUILA_SUNRISE_DESC",
        BriefingVideo: "briefing_tequilasunrise",
        DebriefingVideo: "debriefing_tequilasunrise",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/018_TequilaSunrise/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002626994847",
    },
    UserData: {},
}

const THEFOODCRITIC = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "d27b6142-11b8-4319-9c0b-fac076b016e4",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "c4502487-26fb-4b6c-8760-3cc63ac873ec",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_martini.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "b0b8995c-7b3f-4fa6-91a2-be4bc8edc046",
        Title: "UI_CONTRACT_MARTINI_TITLE",
        Description: "UI_CONTRACT_MARTINI_DESC",
        ScenePath: "assembly:/_PRO/Scenes/Missions/bangkok/_Scene_Tiger.entity",
        TileImage: "images/contracts/elusive/016_Martini/Title.jpg",
        Location: "LOCATION_BANGKOK",
        BriefingVideo: "briefing_martini",
        DebriefingVideo: "debriefing_martini",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "008385381447",
    },
    UserData: {},
}

const THECOLLECTOR = {
    Data: {
        EnableSaving: true,
        Entrances: [
            "0aec817c-738e-4381-bbd4-a13b5d1c6730",
            "5314c86b-7173-412b-a0b5-b0d9af2da722",
            "d4ec0c94-02b2-4aae-be9e-cbb5cc7d7e4a",
            "3812ea57-e29c-42cb-b93a-ea2d3e6a6806",
        ],
        Objectives: [
            {
                _comment: "----- Eliminate The Collector -----",
                Id: "03c76a68-d0ff-4b0e-a078-e6459d3c3f4b",
                Category: "primary",
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "6240a1a1-f5ef-43b9-8665-7829fb0c0b52",
                    },
                },
            },
            {
                _comment: "----- Retrieve the painting [Optional] -----",
                Id: "482570fd-949f-41c9-be77-922657dc6376",
                Category: "secondary",
                ForceShowOnLoadingScreen: true,
                IsHidden: false,
                ObjectiveType: "custom",
                Image: "images/contracts/elusive/s3_bramble/objective2.jpg",
                BriefingName: "$loc UI_CONTRACT_BRAMBLE_OBJ_PAINTING_TITLE",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_BRAMBLE_OBJ_PAINTING_TITLE",
                    iconType: 17,
                },
                BriefingText: "$loc UI_CONTRACT_BRAMBLE_OBJ_PAINTING_DESC",
                Type: "statemachine",
                Definition: {
                    States: {
                        Start: {
                            ItemPickedUp: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "49853af0-d50b-4959-a446-15429b1f4530",
                                    ],
                                },
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
            {
                _comment: "----- Silent objective to trigger escape -----",
                Id: "42718523-7c71-41e3-8e72-ae0ba6e13a47",
                Type: "statemachine",
                Category: "condition",
                ExcludeFromScoring: true,
                OnActive: {
                    IfInProgress: {
                        Visible: false,
                    },
                    IfCompleted: {
                        Visible: false,
                    },
                    IfFailed: {
                        Visible: false,
                    },
                },
                Definition: {
                    Scope: "session",
                    Context: {},
                    States: {
                        Start: {
                            TargetEscapeStarted: {
                                Transition: "Success",
                            },
                        },
                    },
                },
            },
            {
                _comment: "----- Target Escape -----",
                Activation: {
                    $eq: ["$42718523-7c71-41e3-8e72-ae0ba6e13a47", "Completed"],
                },
                Id: "9571d196-8d67-4d94-8dad-6e2d970d7a91",
                Category: "primary",
                ExcludeFromScoring: true,
                IgnoreIfInactive: true,
                OnActive: {
                    IfCompleted: {
                        Visible: false,
                    },
                    IfInProgress: {
                        Visible: true,
                    },
                },
                BriefingText: "$loc UI_CONTRACT_BRAMBLE_FAIL_ESCAPE",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_BRAMBLE_OBJ_ESCAPE",
                    iconType: 8,
                },
                Type: "statemachine",
                Definition: {
                    Context: {},
                    States: {
                        Start: {
                            "-": {
                                Transition: "Standby",
                            },
                        },
                        Standby: {
                            TargetEscapeStarted: {
                                Transition: "Escaping",
                            },
                        },
                        Escaping: {
                            Kill: {
                                Condition: {
                                    $eq: [
                                        "$Value.RepositoryId",
                                        "6240a1a1-f5ef-43b9-8665-7829fb0c0b52",
                                    ],
                                },
                                Transition: "Success",
                            },
                            TargetEscaped: {
                                Transition: "Failure",
                            },
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/ancestral/elusive_bramble.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "92951377-419d-4c31-aa21-2a3f03ef82d0",
        Type: "mission",
        Title: "UI_CONTRACT_BRAMBLE_TITLE",
        Description: "UI_CONTRACT_BRAMBLE_DESC",
        BriefingVideo: "briefing_bramble",
        DebriefingVideo: "debriefing_bramble",
        ScenePath:
            "assembly:/_pro/scenes/missions/ancestral/scene_bulldog.entity",
        TileImage: "images/contracts/elusive/S3_Bramble/Title.jpg",
        Location: "LOCATION_ANCESTRAL_BULLDOG",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Entitlements: ["LOCATION_ANCESTRAL"],
        PublicId: "028967317747",
    },
    UserData: {},
}

const THEICONOCLAST = {
    Data: {
        EnableSaving: true,
        Entrances: [
            "b093bc4d-7f5e-47b9-bbbc-981ef745ec0f",
            "cef7b74a-bd2c-4ee9-94cd-4af5b4613556",
            "939ead3c-0602-4144-a8e6-740719d1950f",
            "cb100c2e-c741-4c27-988c-8dce814f4e9f",
            "64ebf985-fcd6-45a7-8126-81a96ca950c6",
            "bfb5f09f-a8c9-4d4e-9787-f7169c09d428",
        ],
        Objectives: [
            {
                Id: "5feab3bb-4269-4bb3-8aff-df331e4ad01d",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "16487ed1-f857-411f-a239-88884c884972",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/elegant/elusive_jockeyclub.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "fa002472-2120-44b6-bf48-41d14af97f51",
        Type: "mission",
        Title: "UI_CONTRACT_JOCKEYCLUB_TITLE",
        Description: "UI_CONTRACT_JOCKEYCLUB_DESC",
        BriefingVideo: "briefing_jockeyclub",
        DebriefingVideo: "debriefing_jockeyclub",
        ScenePath:
            "assembly:/_pro/scenes/missions/elegant/scene_llama_elusive_jockeyclub.entity",
        TileImage: "images/contracts/elusive/S3_JockeyClub/Title.jpg",
        Location: "LOCATION_ELEGANT_LLAMA",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        PublicId: "031518569147",
    },
    UserData: {},
}

const THEUNDYING = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "c2b3f8e3-0eaf-41b3-8b8c-3cf012a1d0bc",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "63283fb2-a653-486d-a505-e471efbc8c54",
                    },
                },
            },
        ],
        Entrances: ["f1de2373-eebe-4448-808a-8c2764b2c931"],
        Bricks: ["assembly:/_pro/scenes/missions/miami/mission_sambuca.brick"],
        GameChangers: [],
    },
    Metadata: {
        Id: "06a58b66-56f4-45c3-ba1b-d03998212289",
        Title: "UI_CONTRACT_SAMBUCA_TITLE",
        Description: "UI_CONTRACT_SAMBUCA_DESC",
        BriefingVideo: "briefing_sambuca",
        DebriefingVideo: "debriefing_sambuca",
        ScenePath:
            "assembly:/_pro/scenes/missions/miami/scene_et_sambuca.entity",
        TileImage: "images/contracts/elusive/046_sambuca/Title.jpg",
        Location: "LOCATION_MIAMI",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "011729327747",
    },
    UserData: {},
}

const THEUNDYINGRETURNS = {
    Data: {
        GameChangers: [],
        Bricks: [
            "assembly:/_pro/scenes/missions/miami/scenario_sambuca2.brick",
        ],
        EnableSaving: true,
        Entrances: ["f1de2373-eebe-4448-808a-8c2764b2c931"],
        Objectives: [
            {
                Primary: true,
                SuccessEvent: {
                    EventValues: {
                        RepositoryId: "0eda939e-db2b-4344-9c3f-9d00eb2fb1bc",
                    },
                    EventName: "Kill",
                },
                Id: "9eaf0208-4736-4554-aeed-cfc871efab40",
                IsHidden: true,
            },
        ],
    },
    Metadata: {
        DebriefingVideo: "debriefing_sambuca2",
        BriefingVideo: "briefing_sambuca2",
        Title: "UI_CONTRACT_SAMBUCA2_TITLE",
        Id: "ecf353e8-3dd8-4958-b255-f963926aea51",
        ScenePath:
            "assembly:/_pro/scenes/missions/miami/scene_et_sambuca.entity",
        Type: "mission",
        TileImage: "images/contracts/elusive/s2_sambuca2/title.jpg",
        Description: "UI_CONTRACT_SAMBUCA2_DESC",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Location: "LOCATION_MIAMI",
        PublicId: "011134826347",
    },
    UserData: {},
}

const THEWILDCARD = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "611cbf7d-7871-4a02-843a-06d523563519",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "fddd444a-e9a5-4650-96ff-029df224bb61",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_quadruplerumandcoke.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "8f13ea71-b207-4955-9eb8-ede757f3baa6",
        Title: "UI_CONTRACT_QUADRUPLERUMANDCOKE_TITLE",
        Description: "UI_CONTRACT_QUADRUPLERUMANDCOKE_DESC",
        BriefingVideo: "briefing_quadruplerumandcoke",
        DebriefingVideo: "debriefing_quadruplerumandcoke",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        Location: "LOCATION_COASTALTOWN",
        TileImage: "images/contracts/elusive/044_quadruplerumandcoke/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003645977547",
    },
    UserData: {},
}

const THECONGRESSMAN = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "b89d05b7-cf33-4f84-93bb-612c9d3b359b",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "3abdf4fd-4db9-4276-8a1a-6b6e119bedae",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Mission_MintJulep.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "ff188c8b-e1eb-4c59-af75-6b6fe3da5955",
        Title: "UI_CONTRACT_MINT_JULEP_TITLE",
        Description: "UI_CONTRACT_MINT_JULEP_DESC",
        BriefingVideo: "briefing_mintjulep",
        DebriefingVideo: "debriefing_mintjulep",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        Location: "LOCATION_COASTALTOWN",
        TileImage: "images/contracts/elusive/006_MintJulep/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003179168347",
    },
    UserData: {},
}

const THEGURU = {
    Data: {
        EnableSaving: true,
        EnableExits: {
            $eq: ["$e93d1ce7-59be-4956-b724-5d077f707eb1", "Completed"],
        },
        Objectives: [
            {
                Id: "e93d1ce7-59be-4956-b724-5d077f707eb1",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "d749b0f2-d1f0-47d5-bab9-10e3ff4dac8b",
                    },
                },
            },
            {
                Id: "dd898098-ca1d-4630-a12c-1a701cc2a3fa",
                Category: "primary",
                OnActive: {
                    IfCompleted: {
                        Visible: false,
                    },
                },
                IsHidden: true,
                BriefingText: "$loc UI_CONTRACT_HARVEY_WALLBANGER_FAIL_1",
                Type: "statemachine",
                ExcludeFromScoring: true,
                Definition: {
                    Scope: "hit",
                    Context: {
                        KilledActors: [],
                        Targets: ["8c2dbfaf-d9f5-4343-9bf5-f8092f22da6b"],
                    },
                    States: {
                        Start: {
                            Pacify: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "8c2dbfaf-d9f5-4343-9bf5-f8092f22da6b",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "8c2dbfaf-d9f5-4343-9bf5-f8092f22da6b",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
            {
                Id: "d36f8de6-1818-4237-a3b9-405d98391e95",
                Category: "primary",
                OnActive: {
                    IfCompleted: {
                        Visible: false,
                    },
                },
                IsHidden: true,
                BriefingText: "$loc UI_CONTRACT_HARVEY_WALLBANGER_FAIL_2",
                Type: "statemachine",
                ExcludeFromScoring: true,
                Definition: {
                    Scope: "hit",
                    Context: {
                        KilledActors: [],
                        Targets: ["d555c808-a97d-4094-ae90-d684dd68e936"],
                    },
                    States: {
                        Start: {
                            Pacify: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "d555c808-a97d-4094-ae90-d684dd68e936",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "d555c808-a97d-4094-ae90-d684dd68e936",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Mission_HarveyWallbanger.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "0dc242ce-084e-4f6d-980f-e65885cd6955",
        Title: "UI_CONTRACT_HARVEY_WALLBANGER_TITLE",
        Description: "UI_CONTRACT_HARVEY_WALLBANGER_DESC",
        BriefingVideo: "briefing_harveywallbanger",
        DebriefingVideo: "debriefing_harveywallbanger",
        ScenePath:
            "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        Location: "LOCATION_COASTALTOWN",
        TileImage: "images/contracts/elusive/022_HarveyWallbanger/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "003356960947",
    },
    UserData: {},
}

const THEIDENTITYTHIEF = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "37677b78-a370-43f4-bf7b-caefa67674d6",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "e44ef736-8bba-4d58-8136-c1aca6b74d71",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_PRO/Scenes/Missions/Paris/_Scene_WhiteRussian_01.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "16d78245-5392-413c-b3db-989d6685c32a",
        Title: "UI_CONTRACT_WHITE_RUSSIAN_TITLE",
        Description: "UI_CONTRACT_WHITE_RUSSIAN_DESC",
        BriefingVideo: "briefing_whiterussian",
        DebriefingVideo: "debriefing_whiterussian",
        ScenePath: "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        TileImage: "images/contracts/elusive/001_WhiteRussian/Title.jpg",
        Location: "LOCATION_PARIS",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        PublicId: "002263104647",
    },
    UserData: {},
}

const THEBROTHERS = {
    Data: {
        Objectives: [
            {
                Id: "e233d7e2-28a7-4bf7-bd86-299d014b6f61",
                Category: "primary",
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "d0c17d33-182b-45c7-92fe-96c376ca9301",
                    },
                },
            },
            {
                Id: "04b3fea8-d30f-4040-b744-4bddcd0609f4",
                Category: "primary",
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "3d1b5b6c-a1fe-430e-a4c4-57e76872fa1f",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_negroni.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "3716b654-a42c-45df-9db9-61795a6a3e46",
        Title: "UI_CONTRACT_NEGRONI_TITLE",
        Description: "UI_CONTRACT_NEGRONI_DESC",
        BriefingVideo: "briefing_negroni",
        DebriefingVideo: "debriefing_negroni",
        Location: "LOCATION_MARRAKECH_NIGHT",
        ScenePath:
            "assembly:/_pro/scenes/missions/marrakesh/_scene_python.entity",
        TileImage: "images/contracts/Elusive/007_Negroni/Title.jpg",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Type: "mission",
        Entitlements: ["H1_LEGACY_STANDARD"],
    },
    UserData: {},
}

const THELIABILITY = {
    Data: {
        EnableSaving: true,
        Objectives: [
            {
                Id: "c2a5d24b-16a3-43bc-87be-08e97d3571fd",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "9d1c5d01-a793-4c0a-875b-3b48ad584537",
                    },
                },
            },
            {
                _comment: "----- Do not eliminate the guide -----",
                Id: "d5331a6d-4d91-4949-884f-eb981048a137",
                Category: "secondary",
                ObjectiveType: "custom",
                ForceShowOnLoadingScreen: true,
                Image: "images/contracts/elusive/s3_radler/objective2.jpg",
                BriefingName: "$loc UI_CONTRACT_RADLER_OBJ_2_TITLE",
                BriefingText: "$loc UI_CONTRACT_RADLER_OBJ_2_DESC",
                LongBriefingText: "$loc UI_CONTRACT_RADLER_OBJ_2_DESC_LONG",
                HUDTemplate: {
                    display: "$loc UI_CONTRACT_RADLER_OBJ_2_TITLE",
                    iconType: 17,
                },
                Type: "statemachine",
                ExcludeFromScoring: false,
                Definition: {
                    Scope: "session",
                    States: {
                        Start: {
                            ContractEnd: {
                                Transition: "Success",
                            },
                            Kill: [
                                {
                                    Condition: {
                                        $and: [
                                            {
                                                $eq: [
                                                    "$Value.RepositoryId",
                                                    "a66118e9-9c3e-4251-849c-d3146d218bd5",
                                                ],
                                            },
                                        ],
                                    },
                                    Transition: "Failure",
                                },
                            ],
                        },
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/Edgy/mission_fox/elusive_radler.brick",
        ],
        GameChangers: [],
    },
    Metadata: {
        Id: "38dba4d9-a361-46c9-bdae-7350945d6526",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Title: "UI_CONTRACT_RADLER_TITLE",
        BriefingVideo: "briefing_radler",
        DebriefingVideo: "debriefing_radler",
        Location: "LOCATION_EDGY_FOX",
        Entitlements: ["LOCATION_EDGY"],
        TileImage: "images/contracts/elusive/s3_radler/title.jpg",
        ScenePath:
            "assembly:/_pro/scenes/missions/edgy/mission_fox/scene_radler.entity",
        Type: "mission",
    },
    UserData: {},
}

const THEHEARTBREAKER = {
    Data: {
        Objectives: [
            {
                Id: "c2a5d24b-16a3-43bc-87be-08e97d3571fd",
                Primary: true,
                IsHidden: true,
                SuccessEvent: {
                    EventName: "Kill",
                    EventValues: {
                        RepositoryId: "4085a2b5-87dd-4286-a04a-5698d9812d16",
                    },
                },
            },
        ],
        Bricks: [
            "assembly:/_pro/scenes/missions/elegant/elusive_clerico.brick",
        ],
    },
    Metadata: {
        Id: "d8219c26-4122-4dde-bc42-382cdb374090",
        CreatorUserId: "fadb923c-e6bb-4283-a537-eb4d1150262e",
        Title: "UI_CONTRACT_CLERICO_TITLE",
        BriefingVideo: "briefing_clerico",
        DebriefingVideo: "debriefing_clerico",
        ScenePath:
            "assembly:/_pro/scenes/missions/elegant/scene_llama_elusive_clerico.entity",
        TileImage: "images/contracts/elusive/s3_clerico/title.jpg",
        Type: "mission",
        Location: "LOCATION_ELEGANT_LLAMA",
        Entitlements: ["LOCATION_ELEGANT"],
    },
}

const ELUSIVES = [
    THEFORGER,
    THECONGRESSMAN,
    THEPRINCE,
    THESENSATION,
    THEGUNRUNNER,
    THETWIN,
    THEWILDCARD,
    THEBROKER,
    THEBLACKHAT,
    THEPHARMACIST,
    THEFIXER,
    THEIDENTITYTHIEF,
    THEEXDICTATOR,
    THECHEF,
    THEANGELOFDEATH,
    THEGURU,
    THEFOODCRITIC,
    THECHAMELEON,
    THEBLACKMAILER,
    THEWARLORD,
    THESURGEONS,
    THEBOOKKEEPER,
    THEPAPARAZZO,
    THEBADBOY,
    THEFUGITIVE,
    THEENTERTAINER,
    THEDECIEVERS,
    THEBROTHERS,
    THEUNDYING,
    THEREVOLUTIONARY,
    THEAPPRAISER,
    THEPOLITICIAN,
    THEUNDYINGRETURNS,
    THESERIALKILLER,
    THESTOWAWAY,
    THECOLLECTOR,
    THEICONOCLAST,
    THELIABILITY,
    THEHEARTBREAKER,
]

module.exports = function elusiveTargets(pluginSystem) {
    // can't use spread operators on es2015 classes
    const hooks = pluginSystem.hooks
    const logger = pluginSystem.exposedLibraries.logger
    const addMission = pluginSystem.addMission.bind(this)

    hooks.serverStart.tap("ElusiveTargetsPlugin", () => {
        logger.default(logger.LogLevel.INFO, "Started elusive targets plugin.")
        ELUSIVES.forEach((e) => addMission(e))

        const etHits =
            pluginSystem.exposedLibraries.config.configs.ElusiveTargetHits.data
                .Data

        // default is getConfig
        const locationsData =
            pluginSystem.exposedLibraries.config.default("LocationsData")

        etHits.Hits = ELUSIVES.map((elusive) => {
            const contract =
                pluginSystem.exposedLibraries.contractRegistry.idToJson(
                    elusive.Metadata.Id
                )
            const location_data = locationsData.Data.Locations.find(
                (e) =>
                    e &&
                    e.SubLocation &&
                    e.SubLocation.Id === contract.Metadata.Location
            ).Location

            return {
                Id: contract.Metadata.Id,
                UserCentricContract:
                    pluginSystem.exposedLibraries.dataGen.generateUserCentric(
                        contract,
                        "h3"
                    ),
                Location: location_data,
                SubLocation: location_data,
                ChallengesCompleted: 0,
                ChallengesTotal: 0,
                LocationLevel: 1,
                LocationMaxLevel: 1,
                LocationCompletion: 1,
                LocationXPLeft: 0,
                LocationHideProgression: false,
            }
        })
    })
}
