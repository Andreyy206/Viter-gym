<?php
class Accesories
{
    public $accesories_aid;
    public $accesories_title;
    public $accesories_price;
    public $accesories_description;
    public $accesories_size;
    public $accesories_details;
    public $accesories_photo;
   
    

    public $accesories_is_active;
    public $accesories_datetime;
    public $accesories_created;

    public $connection;
    public $lastInsertedId;

    public $tblaccesories;

    public $accesories_start;
    public $accesories_total;
    public $accesories_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblaccesories = "gym_accesories";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblaccesories} ";
            $sql .= "( accesories_title, ";
            $sql .= "accesories_details, ";
            $sql .= "accesories_price, ";
            $sql .= "accesories_description, ";
            $sql .= "accesories_size, ";
            $sql .= "accesories_photo, ";
            $sql .= "accesories_is_active, ";
            $sql .= "accesories_datetime, ";
            $sql .= "accesories_created ) values ( ";
            $sql .= ":accesories_title, ";
            $sql .= ":accesories_details, ";
            $sql .= ":accesories_price, ";
            $sql .= ":accesories_description, ";
            $sql .= ":accesories_size, ";
            $sql .= ":accesories_photo, ";
            $sql .= ":accesories_is_active, ";
            $sql .= ":accesories_datetime, ";
            $sql .= ":accesories_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_title" => $this->accesories_title,
                "accesories_details" => $this->accesories_details,
                "accesories_price" => $this->accesories_price,
                "accesories_description" => $this->accesories_description,
                "accesories_size" => $this->accesories_size,
                "accesories_photo" => $this->accesories_photo,
                "accesories_is_active" => $this->accesories_is_active,
                "accesories_datetime" => $this->accesories_datetime,
                "accesories_created" => $this->accesories_created,
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
            $sql = "select * from {$this->tblaccesories} ";
            $sql .= "order by accesories_is_active desc, ";
            $sql .= "accesories_title asc ";
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
            $sql = "select * from {$this->tblaccesories} ";
            $sql .= "order by accesories_is_active desc, ";
            $sql .= "accesories_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->accesories_start - 1,
                "total" => $this->accesories_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblaccesories} ";
            $sql .= "where accesories_title like :accesories_title ";
            $sql .= "order by accesories_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_title" => "%{$this->accesories_search}%",
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
            $sql = "select * from {$this->tblaccesories} ";
            $sql .= "where accesories_aid  = :accesories_aid ";
            $sql .= "order by accesories_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_aid" => $this->accesories_aid,
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
            $sql = "update {$this->tblaccesories} set ";
            $sql .= "accesories_title = :accesories_title, ";
            $sql .= "accesories_details = :accesories_details, ";
            $sql .= "accesories_price = :accesories_price, ";
            $sql .= "accesories_description = :accesories_description, ";
            $sql .= "accesories_size = :accesories_size, ";
            $sql .= "accesories_photo = :accesories_photo, ";
            $sql .= "accesories_datetime = :accesories_datetime ";
            $sql .= "where accesories_aid = :accesories_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_title" => $this->accesories_title,
                "accesories_details" => $this->accesories_details,
                "accesories_price" => $this->accesories_price,
                "accesories_description" => $this->accesories_description,
                "accesories_size" => $this->accesories_size,
                "accesories_photo" => $this->accesories_photo,
                "accesories_datetime" => $this->accesories_datetime,
                "accesories_aid" => $this->accesories_aid,
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
            $sql = "update {$this->tblaccesories} set ";
            $sql .= "accesories_is_active = :accesories_is_active, ";
            $sql .= "accesories_datetime = :accesories_datetime ";
            $sql .= "where accesories_aid = :accesories_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_is_active" => $this->accesories_is_active,
                "accesories_datetime" => $this->accesories_datetime,
                "accesories_aid" => $this->accesories_aid,
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
            $sql = "delete from {$this->tblaccesories} ";
            $sql .= "where accesories_aid = :accesories_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_aid" => $this->accesories_aid,
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
            $sql = "select accesories_title from {$this->tblaccesories} ";
            $sql .= "where accesories_title = :accesories_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_title" => "{$this->accesories_title}",
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
    //         $sql = "select product_accesories_id from {$this->tblaccesories} ";
    //         $sql .= "where product_accesories_id = :product_accesories_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_accesories_id" => $this->accesories_aid,
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
            $sql .= "from {$this->tblaccesories} ";
            $sql .= "where accesories_is_active = :accesories_is_active  ";
            $sql .= "order by accesories_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_is_active" => $this->accesories_is_active,
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
            $sql .= "from {$this->tblaccesories} ";
            $sql .= "where ";
            $sql .= "accesories_is_active = :accesories_is_active ";
            $sql .= "and accesories_title like :accesories_title ";
            $sql .= "order by accesories_is_active desc, ";
            $sql .= "accesories_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "accesories_title" => "%{$this->accesories_search}%",
                "accesories_is_active" => $this->accesories_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}