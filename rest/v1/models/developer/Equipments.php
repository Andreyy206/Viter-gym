<?php
class Equipments
{
    public $equipments_aid;
    public $equipments_title;
    public $equipments_price;
    public $equipments_description;
    public $equipments_size;
    public $equipments_details;
    public $equipments_photo;
   
    

    public $equipments_is_active;
    public $equipments_datetime;
    public $equipments_created;

    public $connection;
    public $lastInsertedId;

    public $tblequipments;

    public $equipments_start;
    public $equipments_total;
    public $equipments_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblequipments = "gym_equipments";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblequipments} ";
            $sql .= "( equipments_title, ";
            $sql .= "equipments_details, ";
            $sql .= "equipments_price, ";
            $sql .= "equipments_description, ";
            $sql .= "equipments_size, ";
            $sql .= "equipments_photo, ";
            $sql .= "equipments_is_active, ";
            $sql .= "equipments_datetime, ";
            $sql .= "equipments_created ) values ( ";
            $sql .= ":equipments_title, ";
            $sql .= ":equipments_details, ";
            $sql .= ":equipments_price, ";
            $sql .= ":equipments_description, ";
            $sql .= ":equipments_size, ";
            $sql .= ":equipments_photo, ";
            $sql .= ":equipments_is_active, ";
            $sql .= ":equipments_datetime, ";
            $sql .= ":equipments_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_title" => $this->equipments_title,
                "equipments_details" => $this->equipments_details,
                "equipments_price" => $this->equipments_price,
                "equipments_description" => $this->equipments_description,
                "equipments_size" => $this->equipments_size,
                "equipments_photo" => $this->equipments_photo,
                "equipments_is_active" => $this->equipments_is_active,
                "equipments_datetime" => $this->equipments_datetime,
                "equipments_created" => $this->equipments_created,
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
            $sql = "select * from {$this->tblequipments} ";
            $sql .= "order by equipments_is_active desc, ";
            $sql .= "equipments_title asc ";
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
            $sql = "select * from {$this->tblequipments} ";
            $sql .= "order by equipments_is_active desc, ";
            $sql .= "equipments_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->equipments_start - 1,
                "total" => $this->equipments_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblequipments} ";
            $sql .= "where equipments_title like :equipments_title ";
            $sql .= "order by equipments_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_title" => "%{$this->equipments_search}%",
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
            $sql = "select * from {$this->tblequipments} ";
            $sql .= "where equipments_aid  = :equipments_aid ";
            $sql .= "order by equipments_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_aid" => $this->equipments_aid,
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
            $sql = "update {$this->tblequipments} set ";
            $sql .= "equipments_title = :equipments_title, ";
            $sql .= "equipments_details = :equipments_details, ";
            $sql .= "equipments_price = :equipments_price, ";
            $sql .= "equipments_description = :equipments_description, ";
            $sql .= "equipments_size = :equipments_size, ";
            $sql .= "equipments_photo = :equipments_photo, ";
            $sql .= "equipments_datetime = :equipments_datetime ";
            $sql .= "where equipments_aid = :equipments_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_title" => $this->equipments_title,
                "equipments_details" => $this->equipments_details,
                "equipments_price" => $this->equipments_price,
                "equipments_description" => $this->equipments_description,
                "equipments_size" => $this->equipments_size,
                "equipments_photo" => $this->equipments_photo,
                "equipments_datetime" => $this->equipments_datetime,
                "equipments_aid" => $this->equipments_aid,
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
            $sql = "update {$this->tblequipments} set ";
            $sql .= "equipments_is_active = :equipments_is_active, ";
            $sql .= "equipments_datetime = :equipments_datetime ";
            $sql .= "where equipments_aid = :equipments_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_is_active" => $this->equipments_is_active,
                "equipments_datetime" => $this->equipments_datetime,
                "equipments_aid" => $this->equipments_aid,
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
            $sql = "delete from {$this->tblequipments} ";
            $sql .= "where equipments_aid = :equipments_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_aid" => $this->equipments_aid,
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
            $sql = "select equipments_title from {$this->tblequipments} ";
            $sql .= "where equipments_title = :equipments_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_title" => "{$this->equipments_title}",
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
    //         $sql = "select product_equipments_id from {$this->tblequipments} ";
    //         $sql .= "where product_equipments_id = :product_equipments_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_equipments_id" => $this->equipments_aid,
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
            $sql .= "from {$this->tblequipments} ";
            $sql .= "where equipments_is_active = :equipments_is_active  ";
            $sql .= "order by equipments_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_is_active" => $this->equipments_is_active,
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
            $sql .= "from {$this->tblequipments} ";
            $sql .= "where ";
            $sql .= "equipments_is_active = :equipments_is_active ";
            $sql .= "and equipments_title like :equipments_title ";
            $sql .= "order by equipments_is_active desc, ";
            $sql .= "equipments_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "equipments_title" => "%{$this->equipments_search}%",
                "equipments_is_active" => $this->equipments_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}