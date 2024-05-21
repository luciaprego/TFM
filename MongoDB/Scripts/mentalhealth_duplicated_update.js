db.mentalhealth_duplicated.updateMany({$or: [{Composer: 'Sí'}, {Composer: 'Yes'}]}, {$set: {Composer: 1}});
db.mentalhealth_duplicated.updateMany({Composer: 'No'}, {$set: {Composer: 0}});


db.mentalhealth_duplicated.updateMany({$or: [{Exploratory: 'Sí'}, {Exploratory: 'Yes'}]}, {$set: {Exploratory: 1}});
db.mentalhealth_duplicated.updateMany({Exploratory: 'No'}, {$set: {Exploratory: 0}});

db.mentalhealth_duplicated.updateMany({$or: [{'Foreign languages': 'Sí'}, {'Foreign languages': 'Yes'}]}, {$set: {'Foreign languages': 1}});
db.mentalhealth_duplicated.updateMany({'Foreign languages': 'No'}, {$set: {'Foreign languages': 0}});

db.mentalhealth_duplicated.updateMany({$or: [{'Instrumentalist': 'Sí'}, {'Instrumentalist': 'Yes'}]}, {$set: {'Instrumentalist': 1}});
db.mentalhealth_duplicated.updateMany({'Instrumentalist': 'No'}, {$set: {'Instrumentalist': 0}});

db.mentalhealth_duplicated.updateMany({$or: [{'While working': 'Sí'}, {'Instrumentalist': 'Yes'}]}, {$set: {'While working': 1}});
db.mentalhealth_duplicated.updateMany({'While working': 'No'}, {$set: {'While working': 0}});

db.mentalhealth_duplicated.updateMany({'Music effects': 'Mejora'}, {$set: {'Music effects': 'Improve'}});
db.mentalhealth_duplicated.updateMany({'Music effects': 'No tiene efecto'}, {$set: {'Music effects': 'No effect'}});
db.mentalhealth_duplicated.updateMany({'Music effects': 'Empeora'}, {$set: {'Music effects': 'Worsen'}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Classical]': 'Muy frecuentemente'}, {'Frequency [Classical]': 'Very frequently'}]}, {$set: {'Frequency [Classical]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Classical]': 'A veces'}, {'Frequency [Classical]': 'Sometimes'}]}, {$set: {'Frequency [Classical]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Classical]': 'Casi nunca'}, {'Frequency [Classical]': 'Rarely'}]}, {$set: {'Frequency [Classical]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Classical]': 'Nunca'}, {'Frequency [Classical]': 'Never'}]}, {$set: {'Frequency [Classical]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Country]': 'Muy frecuentemente'}, {'Frequency [Country]': 'Very frequently'}]}, {$set: {'Frequency [Country]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Country]': 'A veces'}, {'Frequency [Country]': 'Sometimes'}]}, {$set: {'Frequency [Country]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Country]': 'Casi nunca'}, {'Frequency [Country]': 'Rarely'}]}, {$set: {'Frequency [Country]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Country]': 'Nunca'}, {'Frequency [Country]': 'Never'}]}, {$set: {'Frequency [Country]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [EDM]': 'Muy frecuentemente'}, {'Frequency [EDM]': 'Very frequently'}]}, {$set: {'Frequency [EDM]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [EDM]': 'A veces'},{'Frequency [EDM]': 'Sometimes'}]}, {$set: {'Frequency [EDM]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [EDM]': 'Casi nunca'}, {'Frequency [EDM]': 'Rarely'}]}, {$set: {'Frequency [EDM]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [EDM]': 'Nunca'}, {'Frequency [EDM]': 'Never'}]}, {$set: {'Frequency [EDM]': 0}});

db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Folk]': 'Muy frecuentemente'}, {'Frequency [Folk]': 'Very frequently'}]}, {$set: {'Frequency [Folk]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Folk]': 'A veces'}, {'Frequency [Folk]': 'Sometimes'}]}, {$set: {'Frequency [Folk]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Folk]': 'Casi nunca'}, {'Frequency [Folk]': 'Rarely'}]}, {$set: {'Frequency [Folk]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Folk]': 'Nunca'}, {'Frequency [Folk]': 'Never'}]}, {$set: {'Frequency [Folk]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Gospel]': 'Muy frecuentemente'}, {'Frequency [Gospel]': 'Very frequently'}]}, {$set: {'Frequency [Gospel]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Gospel]': 'A veces'}, {'Frequency [Gospel]': 'Sometimes'}]}, {$set: {'Frequency [Gospel]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Gospel]': 'Casi nunca'}, {'Frequency [Gospel]': 'Rarely'}]}, {$set: {'Frequency [Gospel]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Gospel]': 'Nunca'}, {'Frequency [Gospel]': 'Never'}]}, {$set: {'Frequency [Gospel]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Hip hop]': 'Muy frecuentemente'}, {'Frequency [Hip hop]': 'Very frequently'}]}, {$set: {'Frequency [Hip hop]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Hip hop]': 'A veces'}, {'Frequency [Hip hop]': 'Sometimes'}]}, {$set: {'Frequency [Hip hop]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Hip hop]': 'Casi nunca'}, {'Frequency [Hip hop]': 'Rarely'}]}, {$set: {'Frequency [Hip hop]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Hip hop]': 'Nunca'}, {'Frequency [Hip hop]': 'Never'}]}, {$set: {'Frequency [Hip hop]': 0}});;


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Jazz]': 'Muy frecuentemente'}, {'Frequency [Jazz]': 'Very frequently'}]}, {$set: {'Frequency [Jazz]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Jazz]': 'A veces'}, {'Frequency [Jazz]': 'Sometimes'}]}, {$set: {'Frequency [Jazz]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Jazz]': 'Casi nunca'}, {'Frequency [Jazz]': 'Rarely'}]}, {$set: {'Frequency [Jazz]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Jazz]': 'Nunca'}, {'Frequency [Jazz]': 'Never'}]}, {$set: {'Frequency [Jazz]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [K pop]': 'Muy frecuentemente'}, {'Frequency [K pop]': 'Very frequently'}]}, {$set: {'Frequency [K pop]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [K pop]': 'A veces'}, {'Frequency [K pop]': 'Sometimes'}]}, {$set: {'Frequency [K pop]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [K pop]': 'Casi nunca'}, {'Frequency [K pop]': 'Rarely'}]}, {$set: {'Frequency [K pop]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [K pop]': 'Nunca'}, {'Frequency [K pop]': 'Never'}]}, {$set: {'Frequency [K pop]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Latin]': 'Muy frecuentemente'}, {'Frequency [Latin]': 'Very frequently'}]}, {$set: {'Frequency [Latin]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Latin]': 'A veces'}, {'Frequency [Latin]': 'Sometimes'}]}, {$set: {'Frequency [Latin]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Latin]': 'Casi nunca'}, {'Frequency [Latin]': 'Rarely'}]}, {$set: {'Frequency [Latin]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Latin]': 'Nunca'}, {'Frequency [Latin]': 'Never'}]}, {$set: {'Frequency [Latin]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Lofi]': 'Muy frecuentemente'}, {'Frequency [Lofi]': 'Very frequently'}]}, {$set: {'Frequency [Lofi]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Lofi]': 'A veces'}, {'Frequency [Lofi]': 'Sometimes'}]}, {$set: {'Frequency [Lofi]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Lofi]': 'Casi nunca'}, {'Frequency [Lofi]': 'Rarely'}]}, {$set: {'Frequency [Lofi]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Lofi]': 'Nunca'}, {'Frequency [Lofi]': 'Never'}]}, {$set: {'Frequency [Lofi]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Metal]': 'Muy frecuentemente'}, {'Frequency [Metal]': 'Very frequently'}]}, {$set: {'Frequency [Metal]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Metal]': 'A veces'}, {'Frequency [Metal]': 'Sometimes'}]}, {$set: {'Frequency [Metal]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Metal]': 'Casi nunca'}, {'Frequency [Metal]': 'Rarely'}]}, {$set: {'Frequency [Metal]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Metal]': 'Nunca'}, {'Frequency [Metal]': 'Never'}]}, {$set: {'Frequency [Metal]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Pop]': 'Muy frecuentemente'}, {'Frequency [Pop]': 'Very frequently'}]}, {$set: {'Frequency [Pop]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Pop]': 'A veces'}, {'Frequency [Pop]': 'Sometimes'}]}, {$set: {'Frequency [Pop]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Pop]': 'Casi nunca'}, {'Frequency [Pop]': 'Rarely'}]}, {$set: {'Frequency [Pop]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Pop]': 'Nunca'}, {'Frequency [Pop]': 'Never'}]}, {$set: {'Frequency [Pop]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [R&B]': 'Muy frecuentemente'}, {'Frequency [R&B]': 'Very frequently'}]}, {$set: {'Frequency [R&B]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [R&B]': 'A veces'},  {'Frequency [R&B]': 'Sometimes'}]}, {$set: {'Frequency [R&B]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [R&B]': 'Casi nunca'}, {'Frequency [R&B]': 'Rarely'}]}, {$set: {'Frequency [R&B]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [R&B]': 'Nunca'}, {'Frequency [R&B]': 'Never'}]}, {$set: {'Frequency [R&B]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rap]': 'Muy frecuentemente'}, {'Frequency [Rap]': 'Very frequently'}]}, {$set: {'Frequency [Rap]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rap]': 'A veces'}, {'Frequency [Rap]': 'Sometimes'}]}, {$set: {'Frequency [Rap]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rap]': 'Casi nunca'}, {'Frequency [Rap]': 'Rarely'}]}, {$set: {'Frequency [Rap]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rap]': 'Nunca'}, {'Frequency [Rap]': 'Never'}]}, {$set: {'Frequency [Rap]': 0}});


db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rock]': 'Muy frecuentemente'}, {'Frequency [Rock]': 'Very frequently'}]}, {$set: {'Frequency [Rock]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rock]': 'A veces'}, {'Frequency [Rock]': 'Sometimes'}]}, {$set: {'Frequency [Rock]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rock]': 'Casi nunca'}, {'Frequency [Rock]': 'Rarely'}]}, {$set: {'Frequency [Rock]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Rock]': 'Nunca'}, {'Frequency [Rock]': 'Never'}]}, {$set: {'Frequency [Rock]': 0}});

db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Video game music]': 'Muy frecuentemente'}, {'Frequency [Video game music]': 'Very frequently'}]}, {$set: {'Frequency [Video game music]': 3}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Video game music]': 'A veces'}, {'Frequency [Video game music]': 'Sometimes'}]}, {$set: {'Frequency [Video game music]': 2}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Video game music]': 'Casi nunca'}, {'Frequency [Video game music]': 'Rarely'}]}, {$set: {'Frequency [Video game music]': 1}});
db.mentalhealth_duplicated.updateMany({$or: [{'Frequency [Video game music]': 'Nunca'}, {'Frequency [Video game music]': 'Never'}]}, {$set: {'Frequency [Video game music]': 0}});


// Timestamp
db.mentalhealth_duplicated.aggregate([
  {
    $addFields: {
      cleanedTimestamp: {
        $function: {
          body: function(timestamp) {
            return timestamp.replace(/[^\x00-\x7F]/g, "");
          },
          args: ["$Timestamp"],
          lang: "js"
        }
      }
    }
  },
  {
    $addFields: {
      newTimestamp: {
        $cond: [
          { $regexMatch: { input: "$cleanedTimestamp", regex: /^(\d{1,2}\/\d{1,2}\/\d{4})/ } },
          { $toDate: { $substrBytes: ["$cleanedTimestamp", 0, { $indexOfBytes: ["$cleanedTimestamp", " "] }] } },
          { $toDate: { $substrBytes: ["$cleanedTimestamp", 0, { $indexOfBytes: ["$cleanedTimestamp", " p. m."] }] } }
        ]
      }
    }
  },
  {$addFields: { Timestamp: "$newTimestamp"}},
  {$unset: ["newTimestamp", "cleanedTimestamp"]},
  {$out: "mentalhealth_duplicated"}
]);
