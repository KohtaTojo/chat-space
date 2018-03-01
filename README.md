## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|integer|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has_many :messages


##groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many :messages


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group
