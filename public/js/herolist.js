exports.herolist = [
    'Anti-Mage',          'Axe',                 'Crystal_Maiden',
    'Dazzle',             'Drow_Ranger',         'Earthshaker',
    'Lich',               'Lina',                'Lion',
    'Mirana',             'Morphling',           'Necrophos',
    'Puck',               'Pudge',               'Razor',
    'Sand_King',          'Shadow_Shaman',       'Storm_Spirit',
    'Sven',               'Tidehunter',          'Vengeful_Spirit',
    'Windranger',         'Witch_Doctor',        'Zeus',
    'Slardar',            'Enigma',              'Faceless_Void',
    'Tiny',               'Viper',               'Venomancer',
    'Clockwerk',          "Nature%27s_Prophet",    'Dark_Seer',
    'Sniper',             'Pugna',               'Beastmaster',
    'Enchantress',        'Leshrac',             'Shadow_Fiend',
    'Tinker',             'Weaver',              'Night_Stalker',
    'Ancient_Apparition', 'Spectre',             'Doom',
    'Chen',               'Juggernaut',          'Bloodseeker',
    'Kunkka',             'Riki',                'Queen_of_Pain',
    'Wraith_King',        'Broodmother',         'Huskar',
    'Jakiro',             'Batrider',            'Omniknight',
    'Dragon_Knight',      'Warlock',             'Alchemist',
    'Lifestealer',        'Death_Prophet',       'Ursa',
    'Bounty_Hunter',      'Silencer',            'Spirit_Breaker',
    'Invoker',            'Clinkz',              'Outworld_Destroyer',
    'Bane',               'Shadow_Demon',        'Lycan',
    'Lone_Druid',         'Brewmaster',          'Phantom_Lancer',
    'Treant_Protector',   'Ogre_Magi',           'Gyrocopter',
    'Chaos_Knight',       'Phantom_Assassin',    'Rubick',
    'Luna',                                  'Undying',
    'Disruptor',          'Templar Assassin',    'Naga_Siren',
    'Nyx_Assassin',       'Keeper_of_the_Light', 'Visage',
    'Meepo',              'Magnus',              'Centaur_Warrunner',
    'Slark',              'Timbersaw',           'Medusa',
    'Troll Warlord',      'Tusk',                'Bristleback',
    'Skywrath_Mage',      'Elder_Titan',      'Abaddon',
    'Ember_Spirit',     'Earth_Spirit',
    'Legion_Commander', 
    'Terrorblade',      'Techies',
    'Oracle',           'Winter_Wyvern',
    'Arc_Warden',       'Underlord',      'Dark_Willow',
    'Pangolier',        'Grimstroke',
    'Mars',             'Snapfire',
    'Void_Spirit',      'Hoodwink',
    'Dawnbreaker',      
    'Primal_Beast',
  ];

exports.herolist7 = [
    'Warlock', 'Anti-Mage', 'Axe', 'Dragon_Knight', 'Drow_Ranger', 'Earthshaker','Enigma', 'Invoker', 'Legion_Commander', 'Shadow_Fiend',
    'Rubick', 'Meepo', 'Ogre_Magi', 'Phantom_Assassin','Primal_Beast','Pudge', 'Queen_of_Pain','Sniper','Spectre',  'Tiny', 'Windranger','Wraith_King', 'Zeus',
]

exports.herolist8 = [
    'Hoodwink', 'Dawnbreaker', 'Mars', 'Snapfire', 'Techies','Terrorblade', 'Void_Spirit','Grimstroke', 
]

exports.herolist9 = [
    'Dark_Willow',
]

exports.herolist5 = [
    "Abaddon",
]

exports.herolist10 = [
    'Pangolier',
]

exports.herolistv1 = [
    'Crystal_Maiden',     'Dazzle',              'Lich',
  'Lina',               'Lion',                'Mirana',
  'Morphling',          'Necrophos',           'Puck',
  'Razor',              'Sand_King',           'Shadow_Shaman',
  'Storm_Spirit',       'Sven',                'Tidehunter',
  'Vengeful_Spirit',    'Witch_Doctor',        'Slardar',
  'Faceless_Void',      'Viper',               'Venomancer',
  'Clockwerk',          'Nature%27s_Prophet',  'Dark_Seer',
  'Pugna',              'Beastmaster',         'Enchantress',
  'Leshrac',            'Tinker',              'Weaver',
  'Night_Stalker',      'Ancient_Apparition',  'Doom',
  'Chen',               'Juggernaut',          'Bloodseeker',
  'Kunkka',             'Riki',                'Broodmother',
  'Huskar',             'Jakiro',              'Batrider',
  'Omniknight',         'Alchemist',           'Lifestealer',
  'Death_Prophet',      'Ursa',                'Bounty_Hunter',
  'Silencer',           'Spirit_Breaker',      'Clinkz',
  'Outworld_Destroyer', 'Bane',                'Shadow_Demon',
  'Lycan',              'Lone_Druid',          'Brewmaster',
  'Phantom_Lancer',     'Treant_Protector',    'Gyrocopter',
  'Chaos_Knight',       'Luna',                'Undying',
  'Disruptor',          'Templar Assassin',    'Naga_Siren',
  'Nyx_Assassin',       'Keeper_of_the_Light', 'Visage',
  'Magnus',             'Centaur_Warrunner',   'Slark',
  'Timbersaw',          'Medusa',              'Troll Warlord',
  'Tusk',               'Bristleback',         'Skywrath_Mage',
  'Elder_Titan',        'Ember_Spirit',        'Earth_Spirit',
  'Oracle',             'Winter_Wyvern',       'Arc_Warden',
  'Underlord',
]
exports.randomHeroes = function(lst){
    var n = Math.floor(Math.random() * lst.length + 0)
    var hero = lst[n];
    lst.splice(n, 1);
    return hero;
}

exports.getCorrect = function(lst){
    var n = Math.floor(Math.random() * 3 + 0)
    var correct = lst[n];
    var output = {
        hero: correct,
        number: n,
    }
    return output;
}