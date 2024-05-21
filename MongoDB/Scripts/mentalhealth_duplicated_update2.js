db.mentalhealth_duplicated.updateMany({ Anxiety: { $gte: 0, $lte: 3}}, {$set: { Anxiety: 0}});
db.mentalhealth_duplicated.updateMany({ Anxiety: { $gt: 3, $lte: 7}}, { $set: { Anxiety: 1}});
db.mentalhealth_duplicated.updateMany({ Anxiety: { $gt: 7, $lte: 10}}, { $set: { Anxiety: 2}});

db.mentalhealth_duplicated.updateMany({ Depression: { $gte: 0, $lte: 3}},{ $set: { Depression: 0}});
db.mentalhealth_duplicated.updateMany({ Depression: { $gt: 3, $lte: 7}}, { $set: { Depression: 1}});
db.mentalhealth_duplicated.updateMany({ Depression: { $gt: 7, $lte: 10}},{ $set: { Depression: 2}});

db.mentalhealth_duplicated.updateMany({ Insomnia: { $gte: 0, $lte: 3}},{ $set: { Insomnia: 0}});
db.mentalhealth_duplicated.updateMany({ Insomnia: { $gt: 3, $lte: 7}},{ $set: { Insomnia: 1}});
db.mentalhealth_duplicated.updateMany({ Insomnia: { $gt: 7, $lte: 10}},{ $set: { Insomnia: 2}});

db.mentalhealth_duplicated.updateMany({ OCD: { $gte: 0, $lte: 3}}, {$set: { OCD: 0}});
db.mentalhealth_duplicated.updateMany({ OCD: { $gt: 3, $lte: 7}}, { $set: { OCD: 1}});
db.mentalhealth_duplicated.updateMany({ OCD: { $gt: 7, $lte: 10}}, { $set: { OCD: 2}});
