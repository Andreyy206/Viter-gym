<?php
class Apparels
{
    public $apparels_aid;
    public $apparels_title;
    public $apparels_price;
    public $apparels_description;
    public $apparels_size;
    public $apparels_details;
    public $apparels_photo;
   
    

    public $apparels_is_active;
    public $apparels_datetime;
    public $apparels_created;

    public $connection;
    public $lastInsertedId;

    public $tblapparels;

    public $apparels_start;
    public $apparels_total;
    public $apparels_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblapparels = "gym_apparels";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblapparels} ";
            $sql .= "( apparels_title, ";
            $sql .= "apparels_details, ";
            $sql .= "apparels_price, ";
            $sql .= "apparels_description, ";
            $sql .= "apparels_size, ";
            $sql .= "apparels_photo, ";
            $sql .= "apparels_is_active, ";
            $sql .= "apparels_datetime, ";
            $sql .= "apparels_created ) values ( ";
            $sql .= ":apparels_title, ";
            $sql .= ":apparels_details, ";
            $sql .= ":apparels_price, ";
            $sql .= ":apparels_description, ";
            $sql .= ":apparels_size, ";
            $sql .= ":apparels_photo, ";
            $sql .= ":apparels_is_active, ";
            $sql .= ":apparels_datetime, ";
            $sql .= ":apparels_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_title" => $this->apparels_title,
                "apparels_details" => $this->apparels_details,
                "apparels_price" => $this->apparels_price,
                "apparels_description" => $this->apparels_description,
                "apparels_size" => $this->apparels_size,
                "apparels_photo" => $this->apparels_photo,
                "apparels_is_active" => $this->apparels_is_active,
                "apparels_datetime" => $this->apparels_datetime,
                "apparels_created" => $this->apparels_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblapparels} ";
            $sql .= "order by apparels_is_active desc, ";
            $sql .= "apparels_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblapparels} ";
            $sql .= "order by apparels_is_active desc, ";
            $sql .= "apparels_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->apparels_start - 1,
                "total" => $this->apparels_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblapparels} ";
            $sql .= "where apparels_title like :apparels_title ";
            $sql .= "order by apparels_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_title" => "%{$this->apparels_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblapparels} ";
            $sql .= "where apparels_aid  = :apparels_aid ";
            $sql .= "order by apparels_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_aid" => $this->apparels_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblapparels} set ";
            $sql .= "apparels_title = :apparels_title, ";
            $sql .= "apparels_details = :apparels_details, ";
            $sql .= "apparels_price = :apparels_price, ";
            $sql .= "apparels_description = :apparels_description, ";
            $sql .= "apparels_size = :apparels_size, ";
            $sql .= "apparels_photo = :apparels_photo, ";
            $sql .= "apparels_datetime = :apparels_datetime ";
            $sql .= "where apparels_aid = :apparels_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_title" => $this->apparels_title,
                "apparels_details" => $this->apparels_details,
                "apparels_price" => $this->apparels_price,
                "apparels_description" => $this->apparels_description,
                "apparels_size" => $this->apparels_size,
                "apparels_photo" => $this->apparels_photo,
                "apparels_datetime" => $this->apparels_datetime,
                "apparels_aid" => $this->apparels_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblapparels} set ";
            $sql .= "apparels_is_active = :apparels_is_active, ";
            $sql .= "apparels_datetime = :apparels_datetime ";
            $sql .= "where apparels_aid = :apparels_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_is_active" => $this->apparels_is_active,
                "apparels_datetime" => $this->apparels_datetime,
                "apparels_aid" => $this->apparels_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblapparels} ";
            $sql .= "where apparels_aid = :apparels_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_aid" => $this->apparels_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select apparels_title from {$this->tblapparels} ";
            $sql .= "where apparels_title = :apparels_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_title" => "{$this->apparels_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_apparels_id from {$this->tblapparels} ";
    //         $sql .= "where product_apparels_id = :product_apparels_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_apparels_id" => $this->apparels_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblapparels} ";
            $sql .= "where apparels_is_active = :apparels_is_active  ";
            $sql .= "order by apparels_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_is_active" => $this->apparels_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblapparels} ";
            $sql .= "where ";
            $sql .= "apparels_is_active = :apparels_is_active ";
            $sql .= "and apparels_title like :apparels_title ";
            $sql .= "order by apparels_is_active desc, ";
            $sql .= "apparels_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "apparels_title" => "%{$this->apparels_search}%",
                "apparels_is_active" => $this->apparels_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}